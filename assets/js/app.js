/**
 * Main Controller & Customization System
 * Author: Dung Automation
 */

// Special Celebrations & Holidays for Women
const OCCASIONS = {
  "8-3": {
    name: "8/3 Quốc Tế Phụ Nữ",
    badge: "Chúc Mừng Ngày Quốc Tế Phụ Nữ 8/3 🌷",
    title: "Bông Hoa Đẹp Nhất 8/3",
    subtitle: "Gửi ngàn đóa hoa tươi thắm và lời chúc ngọt ngào nhất đến người phụ nữ tuyệt vời nhân ngày Quốc tế Phụ nữ!",
    tagline: "Bông hoa rực rỡ nhất ngày 8/3",
    defaultWish: "Nhân ngày 8/3, chúc bạn luôn xinh đẹp, hạnh phúc, thành công và mãi là đóa hoa thơm ngát rực rỡ nhất trong mắt mọi người! 🌷💖"
  },
  "20-10": {
    name: "20/10 Phụ Nữ VN",
    badge: "Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 🌹",
    title: "Bông Hoa Đẹp Nhất 20/10",
    subtitle: "Tôn vinh nét đẹp dịu dàng, duyên dáng và kiên cường của người phụ nữ Việt Nam nhân ngày 20/10!",
    tagline: "Bông hoa duyên dáng nhất ngày 20/10",
    defaultWish: "Chúc mừng ngày Phụ nữ Việt Nam 20/10! Chúc bạn nhận được thật nhiều hoa, ngập tràn quà tặng, luôn trẻ trung, duyên dáng và hạnh phúc trọn vẹn! 🌹✨"
  },
  "14-2": {
    name: "14/2 Valentine",
    badge: "Ngày Lễ Tình Nhân 14/2 Ngọt Ngào 💖",
    title: "Em Là Bông Hoa Đẹp Nhất",
    subtitle: "Trong hàng triệu đóa hoa trên thế giới, em luôn là đóa hoa duy nhất và đẹp nhất trong trái tim anh!",
    tagline: "Người con gái anh yêu thương nhất",
    defaultWish: "Happy Valentine's Day! Cảm ơn em vì đã xuất hiện và làm cho thế giới của anh trở nên rực rỡ, ngọt ngào như ngày mùa xuân. Yêu em rất nhiều! 🍫💖"
  },
  "mother": {
    name: "Ngày Của Mẹ",
    badge: "Tri Ân & Kính Chúc Ngày Của Mẹ Yêu 💐",
    title: "Mẹ Là Bông Hoa Đẹp Nhất",
    subtitle: "Kính chúc người phụ nữ vĩ đại, bao dung và tuyệt vời nhất cuộc đời con luôn mạnh khỏe, bình an và hạnh phúc!",
    tagline: "Người Mẹ tuyệt vời nhất trần đời",
    defaultWish: "Con kính chúc Mẹ một ngày thật nhiều niềm vui và sức khỏe! Cảm ơn Mẹ vì tất cả sự hy sinh và tình yêu thương vô bờ bến dành cho con. Con yêu Mẹ rất nhiều! 💐❤️"
  },
  "birthday": {
    name: "Sinh Nhật Nàng",
    badge: "Chúc Mừng Sinh Nhật Rực Rỡ 🎂",
    title: "Sinh Nhật Đóa Hoa Xinh Đẹp",
    subtitle: "Chúc mừng sinh nhật nàng thơ! Chúc tuổi mới nở rộ như hoa mùa xuân, luôn xinh đẹp và hạnh phúc trọn vẹn!",
    tagline: "Chúc mừng sinh nhật đóa hoa kiêu kỳ",
    defaultWish: "Happy Birthday! Chúc bạn tuổi mới ngập tràn niềm vui mới, thành công mới, luôn rạng ngời, tự tin và mãi là đóa hoa đẹp nhất trần đời! 🎂🎉"
  },
  "love": {
    name: "Ngày Yêu Thương",
    badge: "Món Quà Tình Yêu & Sự Trân Trọng 🌸",
    title: "Bông Hoa Đẹp Nhất",
    subtitle: "Mỗi người phụ nữ là một đóa hoa độc nhất vô nhị trên thế gian — luôn rạng rỡ và ngát hương theo cách riêng của mình.",
    tagline: "Bông hoa đẹp nhất trần đời",
    defaultWish: "Chúc bạn mỗi ngày trôi qua đều ngập tràn niềm vui, nụ cười luôn nở trên môi và luôn cảm nhận được sự yêu thương chân thành nhất! 🌸✨"
  }
};

// 12 Meaningful Floral Boxes Celebrating the Virtues of a Woman
const FLORAL_BOXES_DATA = [
  {
    month: "Món Quà 1",
    theme: "🌸 Nụ Cười Tỏa Nắng",
    image: "assets/images/sleep.gif",
    message: "Nụ cười của bạn là ánh nắng sưởi ấm mọi ngày đông. Hãy luôn giữ nụ cười rạng rỡ, hồn nhiên và ngủ thật ngon mỗi tối nhé! 🌙✨",
    songIndex: 0
  },
  {
    month: "Món Quà 2",
    theme: "🌷 Dịu Dàng & Sâu Lắng",
    image: "assets/images/11.jpg",
    message: "Tựa như một khúc ca êm dịu, vẻ đẹp và sự dịu dàng của bạn luôn khiến cuộc đời này trở nên ấm áp và bình yên hơn. 🎵🌸",
    songIndex: 1
  },
  {
    month: "Món Quà 3",
    theme: "🌼 Rạng Rỡ & May Mắn",
    image: "assets/images/12.jpg",
    message: "Chúc bạn luôn ngập tràn niềm vui, may mắn luôn mỉm cười và từng ngày trôi qua đều là những khoảnh khắc rạng rỡ nhất! 🌼💛",
    songIndex: 2
  },
  {
    month: "Món Quà 4",
    theme: "💌 Được Yêu Thương Trọn Vẹn",
    image: "assets/images/12.gif",
    message: "Bạn là món quà vô giá của thế gian. Xứng đáng được nâng niu, chở che và yêu thương theo cách ngọt ngào nhất! 💌🌿",
    songIndex: 3
  },
  {
    month: "Món Quà 5",
    theme: "🍃 Tự Do & Kiêu Hãnh",
    image: "assets/images/7.gif",
    message: "Hãy luôn tự do bay nhảy như làn gió mùa hạ, kiêu hãnh và rực rỡ như một đóa hồng không bao giờ phai tàn! 🍃🌷",
    songIndex: 4
  },
  {
    month: "Món Quà 6",
    theme: "☀️ Năng Lượng Ấm Áp",
    image: "assets/images/21.gif",
    message: "Năng lượng tích cực và đáng yêu của bạn luôn sưởi ấm trái tim mọi người. Hãy luôn là chính mình, vui tươi và hạnh phúc nhé! 🍦☀️",
    songIndex: 5
  },
  {
    month: "Món Quà 7",
    theme: "👑 Nữ Vương Cuộc Đời Mình",
    image: "assets/images/32.gif",
    message: "Được sinh ra là phụ nữ là một đặc ân tuyệt vời. Hãy luôn ngẩng cao đầu và đội chiếc vương miện kiêu sa của sự tự tin! 🌟👑",
    songIndex: 6
  },
  {
    month: "Món Quà 8",
    theme: "🍂 Tâm Hồn Thuần Khiết",
    image: "assets/images/23.gif",
    message: "Dù cuộc sống có bận rộn hay đổi thay, mong trái tim bạn vẫn giữ trọn nét thuần khiết, an yên và dịu dàng như thuở ban đầu. 🍂☕",
    songIndex: 7
  },
  {
    month: "Món Quà 9",
    theme: "🕊️ Bình Yên Từng Giây Phút",
    image: "assets/images/30.gif",
    message: "Chúc bạn mỗi sớm mai thức dậy đều thấy lòng nhẹ nhõm, mỗi tối đi ngủ đều thấy bình yên và từng giây phút đều hạnh phúc! 🕊️💖",
    songIndex: 8
  },
  {
    month: "Món Quà 10",
    theme: "🚲 Có Người Đồng Hành",
    image: "assets/images/15.gif",
    message: "Mong trên mọi nẻo đường tương lai, luôn có người chân thành kề bên, lắng nghe, sẻ chia và chở che cho bạn qua mọi giông bão. 🚲🌈",
    songIndex: 9
  },
  {
    month: "Món Quà 11",
    theme: "✨ Tỏa Sáng Độc Bản",
    image: "assets/images/10.gif",
    message: "Bạn không cần phải cố gắng giống bất kỳ ai, bởi vì chính bạn đã là bông hoa rực rỡ và duy nhất trên thế giới này rồi! ✨🎈",
    songIndex: 10
  },
  {
    month: "Món Quà 12",
    theme: "🎁 Trọn Vẹn Hạnh Phúc",
    image: "assets/images/16.gif",
    message: "Cầu chúc cho người phụ nữ tuyệt vời này một đời an yên, một đời hạnh phúc, luôn được nâng niu và yêu thương đong đầy! 🎁❄️",
    songIndex: 11
  }
];

// Customizable Global Card Configuration
let cardConfig = {
  recipient: "Nàng Thơ",
  sender: "Người thương bạn",
  wish: OCCASIONS["8-3"].defaultWish,
  event: "8-3",
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

  if (params.get("event") && OCCASIONS[params.get("event")]) {
    cardConfig.event = params.get("event");
  }
  if (params.get("to")) cardConfig.recipient = params.get("to");
  if (params.get("from")) cardConfig.sender = params.get("from");
  if (params.get("msg")) cardConfig.wish = params.get("msg");
  if (params.get("song")) {
    const s = parseInt(params.get("song"));
    if (!isNaN(s) && s >= 0 && s < SONGS_PLAYLIST.length) cardConfig.defaultSong = s;
  }

  setOccasion(cardConfig.event, false);
  applyConfigToUI();
}

function setOccasion(eventKey, updateWish = false) {
  if (!OCCASIONS[eventKey]) eventKey = "8-3";
  cardConfig.event = eventKey;
  const occ = OCCASIONS[eventKey];

  // Update occasion pills active state
  document.querySelectorAll(".occasion-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.event === eventKey);
  });

  // Update hero header elements
  const badgeEl = document.getElementById("hero-badge-tag");
  const titleEl = document.getElementById("hero-title");
  const subtitleEl = document.getElementById("hero-subtitle");
  const bannerEl = document.getElementById("recipient-display");

  if (badgeEl) badgeEl.innerHTML = `<i class="fa-solid fa-heart"></i><span>${occ.badge}</span>`;
  if (titleEl) titleEl.textContent = occ.title;
  if (subtitleEl) subtitleEl.textContent = occ.subtitle;
  if (bannerEl) bannerEl.textContent = `Dành tặng: ${cardConfig.recipient} — ${occ.tagline} 🌸`;

  // Update select in modal if available
  const selectOcc = document.getElementById("select-occasion");
  if (selectOcc) selectOcc.value = eventKey;

  if (updateWish) {
    cardConfig.wish = occ.defaultWish;
    const inputMsg = document.getElementById("input-message");
    if (inputMsg) inputMsg.value = cardConfig.wish;
    showToast(`Đã chuyển sang dịp: ${occ.name}! 🌸`);
  }
}

function onOccasionSelectChange(val) {
  setOccasion(val, true);
}

function applyConfigToUI() {
  const occ = OCCASIONS[cardConfig.event] || OCCASIONS["8-3"];
  const bannerEl = document.getElementById("recipient-display");
  if (bannerEl) {
    bannerEl.textContent = `Dành tặng: ${cardConfig.recipient} — ${occ.tagline} 🌸`;
  }

  // Populate Customizer Form
  const selectOcc = document.getElementById("select-occasion");
  const inputTo = document.getElementById("input-recipient");
  const inputFrom = document.getElementById("input-sender");
  const inputMsg = document.getElementById("input-message");
  const selectSong = document.getElementById("select-song");

  if (selectOcc) selectOcc.value = cardConfig.event;
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
        <img src="assets/images/gift2.png" alt="Hộp hoa ${index + 1}" class="gift-icon-img">
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
    "8-3": OCCASIONS["8-3"].defaultWish,
    "20-10": OCCASIONS["20-10"].defaultWish,
    "14-2": OCCASIONS["14-2"].defaultWish,
    "mother": OCCASIONS["mother"].defaultWish,
    "birthday": OCCASIONS["birthday"].defaultWish,
    "love": OCCASIONS["love"].defaultWish
  };

  if (presets[type]) {
    inputMsg.value = presets[type];
    setOccasion(type, false);
    showToast("Đã áp dụng mẫu lời chúc! ✨");
  }
}

function saveCustomCard() {
  playTapSFX();
  const selectOcc = document.getElementById("select-occasion");
  const inputTo = document.getElementById("input-recipient");
  const inputFrom = document.getElementById("input-sender");
  const inputMsg = document.getElementById("input-message");
  const selectSong = document.getElementById("select-song");

  if (selectOcc) cardConfig.event = selectOcc.value;
  cardConfig.recipient = inputTo.value.trim() || "Nàng Thơ";
  cardConfig.sender = inputFrom.value.trim() || "Người thương bạn";
  cardConfig.wish = inputMsg.value.trim() || (OCCASIONS[cardConfig.event] ? OCCASIONS[cardConfig.event].defaultWish : "Chúc bạn luôn rạng rỡ!");
  cardConfig.defaultSong = parseInt(selectSong.value) || 0;

  try {
    localStorage.setItem("bonghoa_custom_config", JSON.stringify(cardConfig));
  } catch (e) {}

  setOccasion(cardConfig.event, false);
  applyConfigToUI();
  closeCustomizer();
  showToast("Đã lưu và cập nhật thiệp thành công! 🌸");

  // Play chosen song
  playSong(cardConfig.defaultSong, true);
}

function copyShareableUrl() {
  playTapSFX();
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set("event", document.getElementById("select-occasion") ? document.getElementById("select-occasion").value : cardConfig.event);
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
