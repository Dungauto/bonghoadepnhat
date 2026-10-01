/**
 * Main Controller & Customization System (with full i18n & language detection)
 * Author: Dung Automation
 */

// Special Celebrations & Holidays for Women
const OCCASIONS = {
  vi: {
    "8-3": {
      name: "🌷 8/3 Quốc Tế Phụ Nữ",
      badge: "Chúc Mừng Ngày Quốc Tế Phụ Nữ 8/3 🌷",
      title: "Bông Hoa Đẹp Nhất 8/3",
      subtitle: "Gửi ngàn đóa hoa tươi thắm và lời chúc ngọt ngào nhất đến người phụ nữ tuyệt vời nhân ngày Quốc tế Phụ nữ!",
      tagline: "Bông hoa rực rỡ nhất ngày 8/3",
      defaultWish: "Nhân ngày 8/3, chúc bạn luôn xinh đẹp, hạnh phúc, thành công và mãi là đóa hoa thơm ngát rực rỡ nhất trong mắt mọi người! 🌷💖"
    },
    "20-10": {
      name: "🌹 20/10 Phụ Nữ VN",
      badge: "Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 🌹",
      title: "Bông Hoa Đẹp Nhất 20/10",
      subtitle: "Tôn vinh nét đẹp dịu dàng, duyên dáng và kiên cường của người phụ nữ Việt Nam nhân ngày 20/10!",
      tagline: "Bông hoa duyên dáng nhất ngày 20/10",
      defaultWish: "Chúc mừng ngày Phụ nữ Việt Nam 20/10! Chúc bạn nhận được thật nhiều hoa, ngập tràn quà tặng, luôn trẻ trung, duyên dáng và hạnh phúc trọn vẹn! 🌹✨"
    },
    "14-2": {
      name: "💖 14/2 Valentine",
      badge: "Ngày Lễ Tình Nhân 14/2 Ngọt Ngào 💖",
      title: "Em Là Bông Hoa Đẹp Nhất",
      subtitle: "Trong hàng triệu đóa hoa trên thế giới, em luôn là đóa hoa duy nhất và đẹp nhất trong trái tim anh!",
      tagline: "Người con gái anh yêu thương nhất",
      defaultWish: "Happy Valentine's Day! Cảm ơn em vì đã xuất hiện và làm cho thế giới của anh trở nên rực rỡ, ngọt ngào như ngày mùa xuân. Yêu em rất nhiều! 🍫💖"
    },
    "mother": {
      name: "💐 Ngày Của Mẹ",
      badge: "Tri Ân & Kính Chúc Ngày Của Mẹ Yêu 💐",
      title: "Mẹ Là Bông Hoa Đẹp Nhất",
      subtitle: "Kính chúc người phụ nữ vĩ đại, bao dung và tuyệt vời nhất cuộc đời con luôn mạnh khỏe, bình an và hạnh phúc!",
      tagline: "Người Mẹ tuyệt vời nhất trần đời",
      defaultWish: "Con kính chúc Mẹ một ngày thật nhiều niềm vui và sức khỏe! Cảm ơn Mẹ vì tất cả sự hy sinh và tình yêu thương vô bờ bến dành cho con. Con yêu Mẹ rất nhiều! 💐❤️"
    },
    "birthday": {
      name: "🎂 Sinh Nhật Nàng",
      badge: "Chúc Mừng Sinh Nhật Rực Rỡ 🎂",
      title: "Sinh Nhật Đóa Hoa Xinh Đẹp",
      subtitle: "Chúc mừng sinh nhật nàng thơ! Chúc tuổi mới nở rộ như hoa mùa xuân, luôn xinh đẹp và hạnh phúc trọn vẹn!",
      tagline: "Chúc mừng sinh nhật đóa hoa kiêu kỳ",
      defaultWish: "Happy Birthday! Chúc bạn tuổi mới ngập tràn niềm vui mới, thành công mới, luôn rạng ngời, tự tin và mãi là đóa hoa đẹp nhất trần đời! 🎂🎉"
    },
    "love": {
      name: "✨ Ngày Yêu Thương",
      badge: "Món Quà Tình Yêu & Sự Trân Trọng 🌸",
      title: "Bông Hoa Đẹp Nhất",
      subtitle: "Mỗi người phụ nữ là một đóa hoa độc nhất vô nhị trên thế gian — luôn rạng rỡ và ngát hương theo cách riêng của mình.",
      tagline: "Bông hoa đẹp nhất trần đời",
      defaultWish: "Chúc bạn mỗi ngày trôi qua đều ngập tràn niềm vui, nụ cười luôn nở trên môi và luôn cảm nhận được sự yêu thương chân thành nhất! 🌸✨"
    }
  },
  en: {
    "8-3": {
      name: "🌷 8/3 Women's Day",
      badge: "Happy International Women's Day 8/3 🌷",
      title: "The Most Beautiful Flower",
      subtitle: "Sending thousands of blooming blossoms and warmest wishes to the extraordinary woman in my heart!",
      tagline: "The most radiant flower on Women's Day",
      defaultWish: "Happy International Women's Day! Wishing you eternal beauty, joy, success, and to always bloom as the most radiant flower! 🌷💖"
    },
    "20-10": {
      name: "🌹 20/10 VN Women",
      badge: "Happy Vietnamese Women's Day 20/10 🌹",
      title: "The Most Radiant Blossom",
      subtitle: "Honoring the grace, resilience, and compassion of Vietnamese women on this special day!",
      tagline: "The most graceful flower of 20/10",
      defaultWish: "Happy Vietnamese Women's Day! May your day be filled with flowers, warm smiles, and unending happiness! 🌹✨"
    },
    "14-2": {
      name: "💖 14/2 Valentine's",
      badge: "Sweet Valentine's Celebration 💖",
      title: "You Are My Prettiest Flower",
      subtitle: "Among millions of blossoms across the universe, you are the only one that truly holds my heart!",
      tagline: "The one I cherish most",
      defaultWish: "Happy Valentine's Day! Thank you for walking into my life and painting my world with warmth and love. Love you endlessly! 🍫💖"
    },
    "mother": {
      name: "💐 Mother's Day",
      badge: "Honoring Beloved Mother 💐",
      title: "Mom Is The Greatest Flower",
      subtitle: "Wishing the most selfless, magnificent, and loving woman in my life abundant health and peace!",
      tagline: "The most wonderful mother in the world",
      defaultWish: "Happy Mother's Day! Thank you Mom for your unconditional love and endless sacrifices. I love you with all my heart! 💐❤️"
    },
    "birthday": {
      name: "🎂 Birthday Girl",
      badge: "Happy Birthday Celebration 🎂",
      title: "Happy Birthday My Flower",
      subtitle: "Wishing the birthday muse a brand new year blooming like spring flowers, radiant and joyful!",
      tagline: "Celebrating the loveliest birthday flower",
      defaultWish: "Happy Birthday! May your new age be filled with exciting adventures, glowing health, and boundless joy! 🎂🎉"
    },
    "love": {
      name: "✨ Everyday Love",
      badge: "Gift of Love & Gratitude 🌸",
      title: "The Most Beautiful Flower",
      subtitle: "Every woman is an irreplaceable and unique blossom in this world — forever radiant in her own way.",
      tagline: "The most beautiful flower of all",
      defaultWish: "May every single day bring you reasons to smile, laugh out loud, and feel deeply loved! 🌸✨"
    }
  }
};

// 12 Meaningful Floral Boxes Celebrating the Virtues of a Woman
const FLORAL_BOXES_DATA = {
  vi: [
    { month: "Món Quà 1", theme: "🌸 Nụ Cười Tỏa Nắng", image: "assets/images/sleep.gif", message: "Nụ cười của bạn là ánh nắng sưởi ấm mọi ngày đông. Hãy luôn giữ nụ cười rạng rỡ, hồn nhiên và ngủ thật ngon mỗi tối nhé! 🌙✨", songIndex: 0 },
    { month: "Món Quà 2", theme: "🌷 Dịu Dàng & Sâu Lắng", image: "assets/images/11.jpg", message: "Tựa như một khúc ca êm dịu, vẻ đẹp và sự dịu dàng của bạn luôn khiến cuộc đời này trở nên ấm áp và bình yên hơn. 🎵🌸", songIndex: 1 },
    { month: "Món Quà 3", theme: "🌼 Rạng Rỡ & May Mắn", image: "assets/images/12.jpg", message: "Chúc bạn luôn ngập tràn niềm vui, may mắn luôn mỉm cười và từng ngày trôi qua đều là những khoảnh khắc rạng rỡ nhất! 🌼💛", songIndex: 2 },
    { month: "Món Quà 4", theme: "💌 Được Yêu Thương Trọn Vẹn", image: "assets/images/12.gif", message: "Bạn là món quà vô giá của thế gian. Xứng đáng được nâng niu, chở che và yêu thương theo cách ngọt ngào nhất! 💌🌿", songIndex: 3 },
    { month: "Món Quà 5", theme: "🍃 Tự Do & Kiêu Hãnh", image: "assets/images/7.gif", message: "Hãy luôn tự do bay nhảy như làn gió mùa hạ, kiêu hãnh và rực rỡ như một đóa hồng không bao giờ phai tàn! 🍃🌷", songIndex: 4 },
    { month: "Món Quà 6", theme: "☀️ Năng Lượng Ấm Áp", image: "assets/images/21.gif", message: "Năng lượng tích cực và đáng yêu của bạn luôn sưởi ấm trái tim mọi người. Hãy luôn là chính mình, vui tươi và hạnh phúc nhé! 🍦☀️", songIndex: 5 },
    { month: "Món Quà 7", theme: "👑 Nữ Vương Cuộc Đời Mình", image: "assets/images/32.gif", message: "Được sinh ra là phụ nữ là một đặc ân tuyệt vời. Hãy luôn ngẩng cao đầu và đội chiếc vương miện kiêu sa của sự tự tin! 🌟👑", songIndex: 6 },
    { month: "Món Quà 8", theme: "🍂 Tâm Hồn Thuần Khiết", image: "assets/images/23.gif", message: "Dù cuộc sống có bận rộn hay đổi thay, mong trái tim bạn vẫn giữ trọn nét thuần khiết, an yên và dịu dàng như thuở ban đầu. 🍂☕", songIndex: 7 },
    { month: "Món Quà 9", theme: "🕊️ Bình Yên Từng Giây Phút", image: "assets/images/30.gif", message: "Chúc bạn mỗi sớm mai thức dậy đều thấy lòng nhẹ nhõm, mỗi tối đi ngủ đều thấy bình yên và từng giây phút đều hạnh phúc! 🕊️💖", songIndex: 8 },
    { month: "Món Quà 10", theme: "🚲 Có Người Đồng Hành", image: "assets/images/15.gif", message: "Mong trên mọi nẻo đường tương lai, luôn có người chân thành kề bên, lắng nghe, sẻ chia và chở che cho bạn qua mọi giông bão. 🚲🌈", songIndex: 9 },
    { month: "Món Quà 11", theme: "✨ Tỏa Sáng Độc Bản", image: "assets/images/10.gif", message: "Bạn không cần phải cố gắng giống bất kỳ ai, bởi vì chính bạn đã là bông hoa rực rỡ và duy nhất trên thế giới này rồi! ✨🎈", songIndex: 10 },
    { month: "Món Quà 12", theme: "🎁 Trọn Vẹn Hạnh Phúc", image: "assets/images/16.gif", message: "Cầu chúc cho người phụ nữ tuyệt vời này một đời an yên, một đời hạnh phúc, luôn được nâng niu và yêu thương đong đầy! 🎁❄️", songIndex: 11 }
  ],
  en: [
    { month: "Gift 1", theme: "🌸 Radiant Sunshine", image: "assets/images/sleep.gif", message: "Your warm smile lights up every chilly winter day. Keep smiling, stay cheerful, and sleep soundly tonight! 🌙✨", songIndex: 0 },
    { month: "Gift 2", theme: "🌷 Gentle & Soulful", image: "assets/images/11.jpg", message: "Like a gentle acoustic melody, your warmth and kindness make this world a much softer and happier place. 🎵🌸", songIndex: 1 },
    { month: "Gift 3", theme: "🌼 Bright & Lucky", image: "assets/images/12.jpg", message: "May good fortune, sweet smiles, and boundless optimism accompany you through every step of your journey! 🌼💛", songIndex: 2 },
    { month: "Gift 4", theme: "💌 Deeply Cherished", image: "assets/images/12.gif", message: "You are an invaluable gift to this world. Deserving of tender care, profound respect, and purest love! 💌🌿", songIndex: 3 },
    { month: "Gift 5", theme: "🍃 Free & Proud", image: "assets/images/7.gif", message: "Fly freely like the summer breeze, proud and magnificent like a rose that never withers! 🍃🌷", songIndex: 4 },
    { month: "Gift 6", theme: "☀️ Warm Energy", image: "assets/images/21.gif", message: "Your positive spirit brings joy to everyone around you. Always stay true to yourself, happy and free! 🍦☀️", songIndex: 5 },
    { month: "Gift 7", theme: "👑 Queen of Your Life", image: "assets/images/32.gif", message: "Being a woman is a superpower. Hold your head high and wear your crown of confidence with elegance! 🌟👑", songIndex: 6 },
    { month: "Gift 8", theme: "🍂 Pure Soul", image: "assets/images/23.gif", message: "No matter how fast the world turns, may your soul remain peaceful, genuine, and pure at heart. 🍂☕", songIndex: 7 },
    { month: "Gift 9", theme: "🕊️ Serene Peace", image: "assets/images/30.gif", message: "May you wake up to lightness in your heart, rest peacefully every night, and cherish every single moment! 🕊️💖", songIndex: 8 },
    { month: "Gift 10", theme: "🚲 True Companion", image: "assets/images/15.gif", message: "May you always have sincere companions by your side to listen, share laughter, and weather every storm with you. 🚲🌈", songIndex: 9 },
    { month: "Gift 11", theme: "✨ Uniquely Brilliant", image: "assets/images/10.gif", message: "You don't need to fit into anyone else's mold. You are already an extraordinary masterpiece! ✨🎈", songIndex: 10 },
    { month: "Gift 12", theme: "🎁 True Happiness", image: "assets/images/16.gif", message: "Wishing this amazing woman a lifetime of tranquility, overflowing blessings, and endless love! 🎁❄️", songIndex: 11 }
  ]
};

const I18N_UI = {
  vi: {
    btnCreateCard: "Tạo Thiệp Tặng",
    btnOpenBox: "Mở Hộp Hoa",
    popupHeaderFor: (name) => `Dành riêng cho ${name}`,
    recipientBanner: (to, tagline) => `Dành tặng: ${to} — ${tagline} 🌸`,
    customizerTitle: "Tạo Thiệp Tặng Riêng",
    lblOccasion: "Dịp lễ / Sự kiện chúc mừng:",
    lblRecipient: "Tên người nhận (Cô ấy / Bạn bè / Mẹ):",
    lblSender: "Tên người gửi (Bạn):",
    lblWishes: "Gợi ý mẫu lời chúc theo dịp:",
    lblSong: "Giai điệu mở đầu mặc định:",
    btnSave: "Lưu & Áp Dụng",
    btnCopy: "Sao Chép Link Tặng",
    defaultRecipient: "Nàng Thơ",
    defaultSender: "Người thương bạn",
    toastSaved: "Đã lưu và cập nhật thiệp thành công! 🌸",
    toastCopied: "Đã sao chép link tặng! Gửi ngay cho người ấy nhé 💌",
    toastOccasionSwitched: (name) => `Đã chuyển sang dịp: ${name}! 🌸`,
    toastPresetApplied: "Đã áp dụng mẫu lời chúc! ✨",
    langButtonText: "🇺🇸 EN"
  },
  en: {
    btnCreateCard: "Create Card",
    btnOpenBox: "Open Floral Gift",
    popupHeaderFor: (name) => `Dedicated to ${name}`,
    recipientBanner: (to, tagline) => `For: ${to} — ${tagline} 🌸`,
    customizerTitle: "Customize Floral E-Card",
    lblOccasion: "Celebrated Occasion / Holiday:",
    lblRecipient: "Recipient name (Her / Friend / Mom):",
    lblSender: "Sender name (You):",
    lblWishes: "Quick wish presets by occasion:",
    lblSong: "Default starting soundtrack:",
    btnSave: "Save & Apply",
    btnCopy: "Copy Gift Link",
    defaultRecipient: "My Muse",
    defaultSender: "Someone who loves you",
    toastSaved: "Card updated and saved successfully! 🌸",
    toastCopied: "Gift link copied! Send it right away to her 💌",
    toastOccasionSwitched: (name) => `Switched to occasion: ${name}! 🌸`,
    toastPresetApplied: "Preset wish applied! ✨",
    langButtonText: "🇻🇳 VI"
  }
};

let currentLang = "vi";

function getOccasionConfig(eventKey) {
  const occDict = OCCASIONS[currentLang] || OCCASIONS.vi;
  return occDict[eventKey] || occDict["8-3"];
}

function getUIText(key, ...args) {
  const dict = I18N_UI[currentLang] || I18N_UI.vi;
  const val = dict[key];
  if (typeof val === "function") return val(...args);
  return val || key;
}

// Customizable Global Card Configuration
let cardConfig = {
  recipient: "Nàng Thơ",
  sender: "Người thương bạn",
  wish: "",
  event: "8-3",
  defaultSong: 0
};

let typewriterTimeout = null;

/* --------------------------------------------------------------------------
   Initialization
   -------------------------------------------------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  detectLanguage();
  loadConfigFromUrlOrStorage();
  initPetalsCanvas();
  initConfettiCanvas();
  initAudioSystem();
  renderGiftCards();
  populateCustomizerSelect();
  applyConfigToUI();
});

/* --------------------------------------------------------------------------
   Language Detection & Switching
   -------------------------------------------------------------------------- */
function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("lang")) {
    const l = params.get("lang").toLowerCase();
    currentLang = l.startsWith("vi") ? "vi" : "en";
    return;
  }

  try {
    const saved = localStorage.getItem("bonghoa_lang");
    if (saved && (saved === "vi" || saved === "en")) {
      currentLang = saved;
      return;
    }
  } catch (e) {}

  const navLang = (navigator.language || (navigator.languages && navigator.languages[0]) || "").toLowerCase();
  currentLang = navLang.startsWith("vi") ? "vi" : "en";
}

function toggleLanguage() {
  playTapSFX();
  currentLang = currentLang === "vi" ? "en" : "vi";
  try {
    localStorage.setItem("bonghoa_lang", currentLang);
  } catch (e) {}

  // Update occasion and wishes
  const occ = getOccasionConfig(cardConfig.event);
  cardConfig.wish = occ.defaultWish;
  if (cardConfig.recipient === I18N_UI.vi.defaultRecipient || cardConfig.recipient === I18N_UI.en.defaultRecipient) {
    cardConfig.recipient = getUIText("defaultRecipient");
  }
  if (cardConfig.sender === I18N_UI.vi.defaultSender || cardConfig.sender === I18N_UI.en.defaultSender) {
    cardConfig.sender = getUIText("defaultSender");
  }

  setOccasion(cardConfig.event, false);
  renderGiftCards();
  applyConfigToUI();
  showToast(currentLang === "vi" ? "Đã chuyển sang Tiếng Việt 🇻🇳" : "Switched to English 🇺🇸");
}

/* --------------------------------------------------------------------------
   Configuration & Storage
   -------------------------------------------------------------------------- */
function loadConfigFromUrlOrStorage() {
  const params = new URLSearchParams(window.location.search);

  cardConfig.recipient = getUIText("defaultRecipient");
  cardConfig.sender = getUIText("defaultSender");

  // Priority: URL parameters > LocalStorage > Default
  const saved = localStorage.getItem("bonghoa_custom_config");
  if (saved) {
    try {
      cardConfig = { ...cardConfig, ...JSON.parse(saved) };
    } catch (e) {}
  }

  if (params.get("event") && OCCASIONS[currentLang][params.get("event")]) {
    cardConfig.event = params.get("event");
  }
  if (params.get("to")) cardConfig.recipient = params.get("to");
  if (params.get("from")) cardConfig.sender = params.get("from");
  if (params.get("msg")) cardConfig.wish = params.get("msg");
  if (params.get("song")) {
    const s = parseInt(params.get("song"));
    if (!isNaN(s) && s >= 0 && s < SONGS_PLAYLIST.length) cardConfig.defaultSong = s;
  }

  const occ = getOccasionConfig(cardConfig.event);
  if (!cardConfig.wish) cardConfig.wish = occ.defaultWish;

  setOccasion(cardConfig.event, false);
}

function setOccasion(eventKey, updateWish = false) {
  const occDict = OCCASIONS[currentLang] || OCCASIONS.vi;
  if (!occDict[eventKey]) eventKey = "8-3";
  cardConfig.event = eventKey;
  const occ = occDict[eventKey];

  // Update occasion pills active state & labels
  document.querySelectorAll(".occasion-pill").forEach(pill => {
    const pKey = pill.dataset.event;
    if (occDict[pKey]) {
      pill.textContent = occDict[pKey].name;
    }
    pill.classList.toggle("active", pKey === eventKey);
  });

  // Update hero header elements
  const badgeEl = document.getElementById("hero-badge-tag");
  const titleEl = document.getElementById("hero-title");
  const subtitleEl = document.getElementById("hero-subtitle");
  const bannerEl = document.getElementById("recipient-display");

  if (badgeEl) badgeEl.innerHTML = `<i class="fa-solid fa-heart"></i><span>${occ.badge}</span>`;
  if (titleEl) titleEl.textContent = occ.title;
  if (subtitleEl) subtitleEl.textContent = occ.subtitle;
  if (bannerEl) bannerEl.textContent = getUIText("recipientBanner", cardConfig.recipient, occ.tagline);

  // Update select in modal if available
  const selectOcc = document.getElementById("select-occasion");
  if (selectOcc) selectOcc.value = eventKey;

  if (updateWish) {
    cardConfig.wish = occ.defaultWish;
    const inputMsg = document.getElementById("input-message");
    if (inputMsg) inputMsg.value = cardConfig.wish;
    showToast(getUIText("toastOccasionSwitched", occ.name));
  }
}

function onOccasionSelectChange(val) {
  setOccasion(val, true);
}

function applyConfigToUI() {
  const occ = getOccasionConfig(cardConfig.event);
  const bannerEl = document.getElementById("recipient-display");
  if (bannerEl) {
    bannerEl.textContent = getUIText("recipientBanner", cardConfig.recipient, occ.tagline);
  }

  // Language button
  const langBtn = document.getElementById("btn-lang-toggle");
  if (langBtn) langBtn.textContent = getUIText("langButtonText");

  const btnCreate = document.getElementById("btn-create-card-text");
  if (btnCreate) btnCreate.textContent = getUIText("btnCreateCard");

  // Modal labels
  const titleModal = document.getElementById("modal-customizer-title");
  if (titleModal) titleModal.textContent = getUIText("customizerTitle");

  const lblOcc = document.getElementById("lbl-occasion");
  if (lblOcc) lblOcc.textContent = getUIText("lblOccasion");

  const lblTo = document.getElementById("lbl-recipient");
  if (lblTo) lblTo.textContent = getUIText("lblRecipient");

  const lblFrom = document.getElementById("lbl-sender");
  if (lblFrom) lblFrom.textContent = getUIText("lblSender");

  const lblWishes = document.getElementById("lbl-wishes");
  if (lblWishes) lblWishes.textContent = getUIText("lblWishes");

  const lblSong = document.getElementById("lbl-song");
  if (lblSong) lblSong.textContent = getUIText("lblSong");

  const btnSave = document.getElementById("btn-save-custom");
  if (btnSave) btnSave.innerHTML = `<i class="fa-solid fa-check"></i> ${getUIText("btnSave")}`;

  const btnCopy = document.getElementById("btn-copy-share");
  if (btnCopy) btnCopy.innerHTML = `<i class="fa-solid fa-share-nodes"></i> ${getUIText("btnCopy")}`;

  // Populate Customizer Form inputs
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
  const boxes = FLORAL_BOXES_DATA[currentLang] || FLORAL_BOXES_DATA.vi;
  boxes.forEach((box, index) => {
    const song = SONGS_PLAYLIST[box.songIndex];
    const cardEl = document.createElement("div");
    cardEl.className = "gift-card";
    cardEl.onclick = () => openFloralBox(index);

    cardEl.innerHTML = `
      <div class="gift-icon-box">
        <img src="assets/images/gift2.png" alt="${box.month}" class="gift-icon-img">
      </div>
      <div class="gift-month-tag">${box.month}</div>
      <div class="gift-title">${box.theme}</div>
      <div class="gift-song-meta" title="${song.title}">
        <i class="fa-solid fa-music"></i>
        <span>${song.title}</span>
      </div>
      <button class="btn-open-box">
        <i class="fa-solid fa-sparkles"></i> ${getUIText("btnOpenBox")}
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

  const boxes = FLORAL_BOXES_DATA[currentLang] || FLORAL_BOXES_DATA.vi;
  const box = boxes[index];
  const modal = document.getElementById("popup-modal");

  document.getElementById("popup-month").textContent = `${box.month} • ${box.theme}`;
  document.getElementById("popup-header-title").textContent = getUIText("popupHeaderFor", cardConfig.recipient);
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
      typewriterTimeout = setTimeout(typeChar, 32 + Math.random() * 20);
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

  const occDict = OCCASIONS[currentLang] || OCCASIONS.vi;
  if (occDict[type]) {
    inputMsg.value = occDict[type].defaultWish;
    setOccasion(type, false);
    showToast(getUIText("toastPresetApplied"));
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
  cardConfig.recipient = inputTo.value.trim() || getUIText("defaultRecipient");
  cardConfig.sender = inputFrom.value.trim() || getUIText("defaultSender");
  const occ = getOccasionConfig(cardConfig.event);
  cardConfig.wish = inputMsg.value.trim() || occ.defaultWish;
  cardConfig.defaultSong = parseInt(selectSong.value) || 0;

  try {
    localStorage.setItem("bonghoa_custom_config", JSON.stringify(cardConfig));
  } catch (e) {}

  setOccasion(cardConfig.event, false);
  applyConfigToUI();
  closeCustomizer();
  showToast(getUIText("toastSaved"));

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
  url.searchParams.set("lang", currentLang);

  navigator.clipboard.writeText(url.toString()).then(() => {
    showToast(getUIText("toastCopied"));
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
