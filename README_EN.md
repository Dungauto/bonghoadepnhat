# 🌸 The Most Beautiful Flower (Bông Hoa Đẹp Nhất) 💐✨

<p align="center">
  <a href="README.md"><b>🇻🇳 Tiếng Việt</b></a> &nbsp;|&nbsp; 
  <a href="README_EN.md"><b>🇺🇸 English</b></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Mobile%20%26%20Desktop-success?style=for-the-badge" alt="Responsive">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License">
</p>

<p align="center">
  <strong>An interactive 3D musical floral e-card with glassmorphism gift boxes — Dedicated to honoring and celebrating the extraordinary women in your life! 💖🌹</strong>
</p>

---

## 🌟 Overview

*"Every woman is a unique and irreplaceable blossom in this world — forever radiant and blooming in her own extraordinary way."*

**The Most Beautiful Flower** is a romantic web art project engineered with HTML5 Canvas physics, CSS3 Glassmorphism, and Vanilla JavaScript. It serves as an exquisite, heartfelt digital gift designed for:
- Girlfriend / Wife / Crush / Romantic Partner.
- Mother / Sister / Grandmother / Loved Ones.
- Female friends and colleagues on special occasions (International Women's Day, Valentine's Day, Mother's Day, Birthdays, Anniversaries).

---

## ✨ Key Features

### 1. 💐 Dedicated Occasion Selector Celebrating Women
Tailored specifically for women's holidays and meaningful moments:
- 🌷 **8/3 - International Women's Day**: Honoring beauty, intelligence, and pride.
- 🌹 **20/10 - Vietnamese Women's Day**: Deep gratitude to resilient, compassionate women.
- 💖 **14/2 - Valentine's Day**: Sweet romantic melodies for your significant other.
- 🤱 **Mother's Day**: Heartfelt appreciation for Mom — the most magnificent flower in life.
- 🎂 **Birthday Girl**: Celebrating another radiant, joyful year of life.
- ✨ **Everyday Love**: Spontaneous expressions of love and appreciation any day of the year.
> *When any holiday is selected, the page hero badge, headers, taglines, recipient banner, and preset wishes adapt dynamically in real-time!*

### 2. 🎁 12 Interactive Blooming Gift Boxes
- Luxurious frosted glass grid (*Glassmorphism*) with shimmering golden accents.
- Each box represents a virtue or heartfelt emotion (Gentle & Pure, Resilient & Radiant, Morning Smile, Truly Loved, Free & Proud, Queen of Your Life, Pure Soul, Peace of Mind, Caring Companion, Uniquely Shining, Complete Happiness).
- Engaging 3D hover effects inviting visitors to interact and open each gift.

### 3. 🌐 Automatic Browser Language Detection (i18n)
- Seamlessly detects the visitor's browser language (`navigator.language`).
  - Vietnamese locales (`vi`, `vi-VN`) -> Displays in Vietnamese.
  - Other global locales (`en`, `ja`, `zh`, `fr`, etc.) -> Automatically switches to English.
- Instant language toggle button in the top toolbar to switch between `🇻🇳 VI` and `🇺🇸 EN`.
- URL parameter support (`?lang=en` or `?lang=vi`).

### 4. 🌸 60 FPS HTML5 Canvas Falling Petals Physics
- Simulates falling rose and sakura petals with gentle wind sway and 3D tumbling physics.
- Petals gently react to cursor and touch movement.
- **Petal Storm Mode (🌸)**: Toggle dense falling petals for a cinematic ambiance.

### 5. 💌 3D Card Bloom & Typewriter Animation
- Tapping any gift box unlocks:
  - Sparkling flower petal fireworks burst (*Petal Burst*).
  - Crystal-clear Web Audio harp chime SFX.
  - A glowing letter unfolding with typewriter character-by-character animation and animated illustration.
  - Automatic activation of the matching acoustic song.

### 6. 🎶 Spinning Vinyl Player (12 Curated Soundtracks)
- Sleek vinyl record player dock at the bottom of the viewport featuring 12 hand-picked acoustic and piano masterpieces.

### 7. 🎨 Card Customizer & Smart Shareable URL
- Personalize recipient name, occasion, sender name, custom wishes, and default song.
- **"Copy Gift Link"**: Automatically encodes your dedication into URL parameters (`?event=...&to=...&from=...&msg=...`). When opened on phone or desktop, the card blooms with your custom message!

---

## 📂 Project Structure

```text
bonghoadepnhat/
├── assets/
│   ├── audio/
│   │   ├── song-1.mp3 ... song-12.mp3  # 12 curated acoustic and piano tracks
│   ├── css/
│   │   └── style.css                   # Glassmorphism, animations & responsive styling
│   ├── images/
│   │   ├── 10.gif ... 32.gif           # Expressive animated illustrations
│   │   ├── flower_bg.jpg               # AI-rendered floral garden background
│   │   └── gift2.png                   # Gift box icon
│   └── js/
│       ├── app.js                      # Main controller: Occasions, i18n, boxes, modals
│       ├── audio.js                    # 12-track audio manager & procedural SFX
│       └── petals.js                   # 60fps canvas falling petals & burst engine
├── .gitignore
├── index.html                          # Semantic HTML5 layout
├── LICENSE                             # MIT License
├── README.md                           # Vietnamese documentation
└── README_EN.md                        # English documentation
```

---

## 🚀 Getting Started & Deployment

### 1. Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Dungauto/bonghoadepnhat.git
   ```
2. Open `index.html` in your favorite web browser.

---

### 2. Free Deployment with GitHub Pages
1. Push code to your GitHub repository.
2. Navigate to **Settings** > **Pages**.
3. Under **Branch**, select **`main`** and **`/ (root)`**, then click **Save**.
4. Website will be live at:
   ```
   https://<username>.github.io/bonghoadepnhat/
   ```

---

## 💌 URL Share Parameters

| Parameter | Description | Available Values / Example |
| :--- | :--- | :--- |
| `event` | Honored Occasion | `8-3`, `20-10`, `14-2`, `mother`, `birthday`, `love` |
| `to` | Recipient name | `?to=Emma`, `?to=Mom` |
| `from` | Sender name | `&from=David` |
| `msg` | Dedicated message | `&msg=You%20are%20the%20most%20beautiful%20flower!` |
| `song` | Track index (0 - 11) | `&song=3` |
| `lang` | Language code | `&lang=en` |

👉 **Full Example Link (Women's Day)**:
```text
https://dungauto.github.io/bonghoadepnhat/?event=8-3&to=My%20Muse&from=Alex&msg=Wishing%20you%20a%20joyful%20and%20radiant%20Women%27s%20Day!&song=3&lang=en
```

---

## 👨‍💻 Author & License

- **Author**: [Dung Automation](https://github.com/Dungauto)
- **Email**: dungautomation@gmail.com
- **License**: Released under the [MIT License](LICENSE).

<p align="center">
  🌸 <em>May every flower in this world bloom with grace, fragrance, and boundless love!</em> 💖
</p>
