/**
 * Audio Engine & Web Audio Sound System
 * Author: Dung Automation
 */

const SONGS_PLAYLIST = [
  { id: 0, title: "Khúc Ca Dịu Êm - Chúc Ngủ Ngon", artist: "Acoustic Melody", src: "assets/audio/song-1.mp3" },
  { id: 1, title: "Silent Open", artist: "Cagnet", src: "assets/audio/song-2.mp3" },
  { id: 2, title: "Nụ Cười Rạng Rỡ - Tuổi Mới", artist: "Piano Instrumental", src: "assets/audio/song-3.mp3" },
  { id: 3, title: "I Do", artist: "911", src: "assets/audio/song-4.mp3" },
  { id: 4, title: "Gió Nổi Rồi", artist: "Tiêu Ức Tĩnh", src: "assets/audio/song-5.mp3" },
  { id: 5, title: "Nothing's Gonna Change My Love For You", artist: "Westlife", src: "assets/audio/song-6.mp3" },
  { id: 6, title: "Proud Of You", artist: "Fiona Fung", src: "assets/audio/song-7.mp3" },
  { id: 7, title: "Sau Lời Từ Khước", artist: "Phan Mạnh Quỳnh", src: "assets/audio/song-8.mp3" },
  { id: 8, title: "Let Her Go", artist: "Passenger", src: "assets/audio/song-9.mp3" },
  { id: 9, title: "Đường Tôi Chở Em Về", artist: "buitruonglinh", src: "assets/audio/song-10.mp3" },
  { id: 10, title: "Thằng Điên", artist: "JustaTee x Phương Ly", src: "assets/audio/song-11.mp3" },
  { id: 11, title: "Cause I Love You", artist: "Noo Phước Thịnh", src: "assets/audio/song-12.mp3" }
];

let currentSongIndex = 0;
let isAudioPlaying = false;
let sfxEnabled = true;
let mainAudioEl = null;

function initAudioSystem() {
  mainAudioEl = document.getElementById("main-audio");
  if (!mainAudioEl) return;

  mainAudioEl.addEventListener("timeupdate", () => {
    if (mainAudioEl.duration) {
      const pct = (mainAudioEl.currentTime / mainAudioEl.duration) * 100;
      const bar = document.getElementById("track-progress-bar");
      if (bar) bar.style.width = `${pct}%`;
    }
  });

  mainAudioEl.addEventListener("ended", () => {
    nextSong();
  });

  mainAudioEl.addEventListener("error", (e) => {
    console.warn("Audio playback error, fallback to first track", e);
  });
}

function playSong(index, autoPlay = true) {
  if (!mainAudioEl) mainAudioEl = document.getElementById("main-audio");
  currentSongIndex = (index >= 0 && index < SONGS_PLAYLIST.length) ? index : 0;
  const song = SONGS_PLAYLIST[currentSongIndex];

  mainAudioEl.src = song.src;

  const titleEl = document.getElementById("track-title");
  if (titleEl) titleEl.textContent = `${song.title} - ${song.artist}`;

  if (autoPlay) {
    mainAudioEl.play().then(() => {
      setPlayState(true);
    }).catch(err => {
      console.log("Waiting for user gesture to play audio:", err);
      setPlayState(false);
    });
  }
}

function toggleAudio() {
  if (!mainAudioEl) mainAudioEl = document.getElementById("main-audio");
  if (isAudioPlaying) {
    mainAudioEl.pause();
    setPlayState(false);
  } else {
    mainAudioEl.play().then(() => {
      setPlayState(true);
    }).catch(err => console.log(err));
  }
}

function setPlayState(playing) {
  isAudioPlaying = playing;
  const dockIcon = document.getElementById("dock-play-icon");
  const dock = document.getElementById("music-dock");

  if (playing) {
    if (dockIcon) dockIcon.className = "fa-solid fa-pause";
    if (dock) dock.classList.add("playing");
  } else {
    if (dockIcon) dockIcon.className = "fa-solid fa-play";
    if (dock) dock.classList.remove("playing");
  }
}

function nextSong() {
  playTapSFX();
  let next = (currentSongIndex + 1) % SONGS_PLAYLIST.length;
  playSong(next, true);
  if (typeof showToast === "function") {
    showToast(`Đang phát: ${SONGS_PLAYLIST[next].title}`);
  }
}

function prevSong() {
  playTapSFX();
  let prev = (currentSongIndex - 1 + SONGS_PLAYLIST.length) % SONGS_PLAYLIST.length;
  playSong(prev, true);
  if (typeof showToast === "function") {
    showToast(`Đang phát: ${SONGS_PLAYLIST[prev].title}`);
  }
}

function seekAudio(e) {
  const container = document.getElementById("track-progress-container");
  if (!container || !mainAudioEl || !mainAudioEl.duration) return;
  const rect = container.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  mainAudioEl.currentTime = (clickX / rect.width) * mainAudioEl.duration;
}

/* --------------------------------------------------------------------------
   Web Audio API Harp / Chime Sound Effects
   -------------------------------------------------------------------------- */
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playHarpBloomSFX() {
  if (!sfxEnabled) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    // Romantic pentatonic chord sweep (C E G A C D E)
    const freqs = [523.25, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);
      gain.gain.setValueAtTime(0.18, now + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.9);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.9);
    });
  } catch (e) {}
}

function playTapSFX() {
  if (!sfxEnabled) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(700, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.07);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.07);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  } catch (e) {}
}

function toggleSoundSFX() {
  sfxEnabled = !sfxEnabled;
  const btn = document.getElementById("btn-sound");
  if (btn) {
    btn.innerHTML = sfxEnabled 
      ? '<i class="fa-solid fa-volume-high"></i>' 
      : '<i class="fa-solid fa-volume-xmark"></i>';
  }
  if (typeof showToast === "function") {
    showToast(sfxEnabled ? "Đã bật hiệu ứng âm thanh 🔔" : "Đã tắt hiệu ứng âm thanh 🔕");
  }
}
