/**
 * Main Controller & Customization System
 * Author: Dung Automation
 */

// 12 Universal Heartwarming Flower & Music Box Messages
const FLORAL_BOXES_DATA = [
  {
    month: "Tháng 1",
    theme: "Khởi Đầu Bình Yên",
    image: "assets/images/sleep.gif",
    message: "Gửi bạn một đêm an lành, gác lại mọi âu lo của ngày dài. Lên giường, đắp chăn ấm và ngủ thật ngon nhé! 🌙✨",
    songIndex: 0
  },
  {
    month: "Tháng 2",
    theme: "Giai Điệu Lắng Đọng",
    image: "assets/images/11.jpg",
    message: "Tựa như một bản tình ca không lời, chúc cuộc sống của bạn luôn tràn ngập những thanh âm trong trẻo và dịu dàng nhất. 🎵🌸",
    songIndex: 1
  },
  {
    month: "Tháng 3",
    theme: "Nụ Cười Tươi Rạng Rỡ",
    image: "assets/images/12.jpg",
    message: "Tháng của hoa nở và nắng ấm! Chúc bạn tuổi mới ngập tràn niềm vui, nụ cười luôn nở trên môi và may mắn luôn mỉm cười với bạn! 🌼💛",
    songIndex: 2
  },
  {
    month: "Tháng 4",
    theme: "Lời Hẹn Ước Dịu Dàng",
    image: "assets/images/12.gif",
    message: "Dù ngày mai nắng hay mưa, mong bạn luôn tìm thấy bình yên trong tâm hồn và gặp được những điều xứng đáng nhất! 💌🌿",
    songIndex: 3
  },
  {
    month: "Tháng 5",
    theme: "Gió Thoảng Mùa Hạ",
    image: "assets/images/7.gif",
    message: "Gió nổi rồi, hãy mặc thêm áo ấm khi trời trở lạnh và luôn biết yêu thương bản thân mình thật nhiều nhé! 🍃🌷",
    songIndex: 4
  },
  {
    month: "Tháng 6",
    theme: "Nắng Ấm Ngọt Ngào",
    image: "assets/images/21.gif",
    message: "Chúc những ngày hè của bạn luôn ngọt ngào như kem mát, vui vẻ, tươi mới và không một chút muộn phiền! 🍦☀️",
    songIndex: 5
  },
  {
    month: "Tháng 7",
    theme: "Niềm Tự Hào Của Bản Thân",
    image: "assets/images/32.gif",
    message: "Bạn là một phiên bản đặc biệt và duy nhất. Hãy luôn tự tin ngẩng cao đầu và tự hào về chính mình mỗi ngày! 🌟👑",
    songIndex: 6
  },
  {
    month: "Tháng 8",
    theme: "Thu Sang Nhẹ Nhàng",
    image: "assets/images/23.gif",
    message: "Những chiếc lá vàng bắt đầu rơi, mang theo những lời chúc bình an và ấm áp nhất gửi đến trái tim bạn. 🍂☕",
    songIndex: 7
  },
  {
    month: "Tháng 9",
    theme: "Học Cách Yêu Thương",
    image: "assets/images/30.gif",
    message: "Cuộc đời thật đẹp khi ta biết trân trọng những điều giản dị quanh mình. Chúc bạn luôn an yên và hạnh phúc! 🕊️💖",
    songIndex: 8
  },
  {
    month: "Tháng 10",
    theme: "Đoạn Đường Đồng Hành",
    image: "assets/images/15.gif",
    message: "Chúc bạn luôn có những người bạn đồng hành chân thành, cùng sẻ chia mọi niềm vui và chở che qua những cơn mưa rào. 🚲🌈",
    songIndex: 9
  },
  {
    month: "Tháng 11",
    theme: "Hồn Nhiên & Tỏa Sáng",
    image: "assets/images/10.gif",
    message: "Giữ mãi nét hồn nhiên, đáng yêu và nụ cười rạng ngời ấy nhé! Bạn luôn tỏa sáng rực rỡ theo cách rất riêng của bạn! ✨🎈",
    songIndex: 10
  },
  {
    month: "Tháng 12",
    theme: "Trọn Vẹn Yêu Thương",
    image: "assets/images/16.gif",
    message: "Khép lại một năm với những kỷ niệm đẹp đẽ. Cầu chúc cho bạn một tương lai rạng ngời, ấm áp và vạn sự như ý! 🎁❄️",
    songIndex: 11
  }
];

// Customizable Global Card Configuration
let cardConfig = {
  recipient: "Nàng Thơ",
  sender: "Người thương bạn",
  wish: "Chúc bạn luôn xinh đẹp, rạng rỡ và hạnh phúc như đóa hoa đẹp nhất trần đời! 🌸✨",
  defaultSong: 0
};

let typewriterTimeout = null;

/* --------------------------------------------------------------------------
   Initialization
   -------------------------------------------------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  loadConfigFromUrlOrStorage();
  initPetalsCanvas();
  initConfettiCanvas();
  initAudioSystem();
  renderGiftCards();
  populateCustomizerSelect();
});

function loadConfigFromUrlOrStorage() {
  const params = new URLSearchParams(window.location.search);

  // Priority: URL parameters > LocalStorage > Default
  const saved = localStorage.getItem("bonghoa_custom_config");
  if (saved) {
    try {
      cardConfig = { ...cardConfig, ...JSON.parse(saved) };
    } catch (e) {}
  }

  if (params.get("to")) cardConfig.recipient = params.get("to");
  if (params.get("from")) cardConfig.sender = params.get("from");
  if (params.get("msg")) cardConfig.wish = params.get("msg");
  if (params.get("song")) {
    const s = parseInt(params.get("song"));
    if (!isNaN(s) && s >= 0 && s < SONGS_PLAYLIST.length) cardConfig.defaultSong = s;
  }

  applyConfigToUI();
}

function applyConfigToUI() {
  const bannerEl = document.getElementById("recipient-display");
  if (bannerEl) {
    bannerEl.textContent = `Dành tặng: ${cardConfig.recipient} 🌸`;
  }

  // Populate Customizer Form
  const inputTo = document.getElementById("input-recipient");
  const inputFrom = document.getElementById("input-sender");
  const inputMsg = document.getElementById("input-message");
  const selectSong = document.getElementById("select-song");

  if (inputTo) inputTo.value = cardConfig.recipient;
  if (inputFrom) inputFrom.value = cardConfig.sender;
  if (inputMsg) inputMsg.value = cardConfig.wish;
  if (selectSong) selectSong.value = cardConfig.defaultSong;
}

/* --------------------------------------------------------------------------
   Render 12 Gift Cards
   -------------------------------------------------------------------------- */
function renderGiftCards() {
  const grid = document.getElementById("gifts-grid");
  if (!grid) return;

  grid.innerHTML = "";
  FLORAL_BOXES_DATA.forEach((box, index) => {
    const song = SONGS_PLAYLIST[box.songIndex];
    const cardEl = document.createElement("div");
    cardEl.className = "gift-card";
    cardEl.onclick = () => openFloralBox(index);

    cardEl.innerHTML = `
      <div class="gift-icon-box">
        <img src="assets/images/gift2.png" alt="Hộp quà ${index + 1}" class="gift-icon-img">
      </div>
      <div class="gift-month-tag">${box.month}</div>
      <div class="gift-title">${box.theme}</div>
      <div class="gift-song-meta" title="${song.title}">
        <i class="fa-solid fa-music"></i>
        <span>${song.title}</span>
      </div>
      <button class="btn-open-box">
        <i class="fa-solid fa-sparkles"></i> Mở Hộp Hoa
      </button>
    `;
    grid.appendChild(cardEl);
  });
}

/* --------------------------------------------------------------------------
   Open Floral Box Popup
   -------------------------------------------------------------------------- */
function openFloralBox(index) {
  playHarpBloomSFX();
  firePetalBurst(window.innerWidth / 2, window.innerHeight * 0.45);

  const box = FLORAL_BOXES_DATA[index];
  const modal = document.getElementById("popup-modal");

  document.getElementById("popup-month").textContent = `${box.month} • ${box.theme}`;
  document.getElementById("popup-header-title").textContent = `Dành riêng cho ${cardConfig.recipient}`;
  document.getElementById("popup-img").src = box.image;
  document.getElementById("popup-song-title").textContent = SONGS_PLAYLIST[box.songIndex].title;

  modal.classList.add("open");

  // Typewriter effect for the box message
  startTypewriter(box.message);

  // Play corresponding song
  playSong(box.songIndex, true);
}

function closePopup() {
  playTapSFX();
  const modal = document.getElementById("popup-modal");
  if (modal) modal.classList.remove("open");
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
}

function startTypewriter(text) {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  const container = document.getElementById("popup-message-text");
  container.textContent = "";
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      container.textContent += text.charAt(i);
      i++;
      typewriterTimeout = setTimeout(typeChar, 35 + Math.random() * 25);
    }
  }
  typeChar();
}

/* --------------------------------------------------------------------------
   Customizer Modal & Smart Share Link
   -------------------------------------------------------------------------- */
function openCustomizer() {
  playTapSFX();
  const modal = document.getElementById("customizer-modal");
  if (modal) modal.classList.add("open");
}

function closeCustomizer() {
  playTapSFX();
  const modal = document.getElementById("customizer-modal");
  if (modal) modal.classList.remove("open");
}

function populateCustomizerSelect() {
  const select = document.getElementById("select-song");
  if (!select) return;

  select.innerHTML = "";
  SONGS_PLAYLIST.forEach(song => {
    const opt = document.createElement("option");
    opt.value = song.id;
    opt.textContent = `🎵 ${song.title} - ${song.artist}`;
    select.appendChild(opt);
  });
}

function applyPresetWish(type) {
  const inputMsg = document.getElementById("input-message");
  if (!inputMsg) return;

  const presets = {
    romantic: "Cảm ơn vì đã xuất hiện và khiến cuộc sống của mình trở nên dịu dàng, rực rỡ như những đóa hoa thơm ngát! Yêu bạn rất nhiều! 💖🌸",
    respect: "Kính chúc người phụ nữ tuyệt vời nhất luôn mạnh khỏe, an vui, mãi là điểm tựa ấm áp và là đóa hoa thơm ngát của gia đình! 💐🌹",
    friendship: "Chúc người bạn tuyệt vời của tớ luôn tràn đầy nhiệt huyết, xinh đẹp, rạng rỡ và gặt hái thật nhiều thành công trong cuộc sống! 🌼👭",
    birthday: "Chúc mừng sinh nhật đóa hoa đẹp nhất! Chúc bạn tuổi mới vạn sự như ý, luôn mỉm cười và hạnh phúc mỗi ngày! 🎂🎉"
  };

  if (presets[type]) {
    inputMsg.value = presets[type];
    showToast("Đã áp dụng mẫu lời chúc! ✨");
  }
}

function saveCustomCard() {
  playTapSFX();
  const inputTo = document.getElementById("input-recipient");
  const inputFrom = document.getElementById("input-sender");
  const inputMsg = document.getElementById("input-message");
  const selectSong = document.getElementById("select-song");

  cardConfig.recipient = inputTo.value.trim() || "Nàng Thơ";
  cardConfig.sender = inputFrom.value.trim() || "Người thương bạn";
  cardConfig.wish = inputMsg.value.trim() || "Chúc bạn luôn rạng rỡ như đóa hoa đẹp nhất! 🌸";
  cardConfig.defaultSong = parseInt(selectSong.value) || 0;

  try {
    localStorage.setItem("bonghoa_custom_config", JSON.stringify(cardConfig));
  } catch (e) {}

  applyConfigToUI();
  closeCustomizer();
  showToast("Đã lưu và cập nhật thiệp thành công! 🌸");

  // Play chosen song
  playSong(cardConfig.defaultSong, true);
}

function copyShareableUrl() {
  playTapSFX();
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set("to", document.getElementById("input-recipient").value.trim() || cardConfig.recipient);
  url.searchParams.set("from", document.getElementById("input-sender").value.trim() || cardConfig.sender);
  url.searchParams.set("msg", document.getElementById("input-message").value.trim() || cardConfig.wish);
  url.searchParams.set("song", document.getElementById("select-song").value || 0);

  navigator.clipboard.writeText(url.toString()).then(() => {
    showToast("Đã sao chép link tặng! Gửi ngay cho người ấy nhé 💌");
  }).catch(() => {
    showToast("Link: " + url.toString());
  });
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  if (!toast) return;
  document.getElementById("toast-text").textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
