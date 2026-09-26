/* =========================================================
   MOOD WEATHER V2
   Main JavaScript
   ========================================================= */

const questions = [
  {
    text: "วันนี้ตื่นมารู้สึกยังไงกับตัวเอง?",
    answers: [
      { text: "สดใส พร้อมลุยมาก", score: 5, icon: "☀️" },
      { text: "โอเค เรื่อย ๆ", score: 4, icon: "🌤️" },
      { text: "ยังมึน ๆ อยู่", score: 3, icon: "☁️" },
      { text: "รู้สึกเหนื่อย", score: 2, icon: "🌧️" },
      { text: "ไม่ค่อยไหวเลย", score: 1, icon: "⛈️" }
    ]
  },
  {
    text: "ช่วงนี้พลังงานของพี่เป็นแบบไหน?",
    answers: [
      { text: "พลังเหลือล้น", score: 5, icon: "⚡" },
      { text: "มีพลังพอดี", score: 4, icon: "✨" },
      { text: "ขึ้น ๆ ลง ๆ", score: 3, icon: "〰️" },
      { text: "หมดแรงง่าย", score: 2, icon: "🫠" },
      { text: "อยากพักจริง ๆ", score: 1, icon: "🛌" }
    ]
  },
  {
    text: "ถ้ามีเรื่องไม่คาดคิดเกิดขึ้น พี่รับมือยังไง?",
    answers: [
      { text: "เอาอยู่ ค่อย ๆ แก้", score: 5, icon: "💪" },
      { text: "กังวลนิดหน่อยแต่จัดการได้", score: 4, icon: "🌱" },
      { text: "ต้องใช้เวลาตั้งหลัก", score: 3, icon: "🧘" },
      { text: "รู้สึกกดดันมาก", score: 2, icon: "😵‍💫" },
      { text: "เหมือนทุกอย่างถาโถมเข้ามา", score: 1, icon: "🌪️" }
    ]
  },
  {
    text: "ตอนนี้สิ่งที่พี่อยากได้มากที่สุดคืออะไร?",
    answers: [
      { text: "โอกาสใหม่ ๆ", score: 5, icon: "🌈" },
      { text: "เวลาให้ตัวเอง", score: 4, icon: "🌿" },
      { text: "ความชัดเจน", score: 3, icon: "🔎" },
      { text: "การพักผ่อน", score: 2, icon: "☕" },
      { text: "อยากหนีไปพักก่อน", score: 1, icon: "🏝️" }
    ]
  },
  {
    text: "ช่วงนี้พี่มองอนาคตของตัวเองแบบไหน?",
    answers: [
      { text: "ตื่นเต้นและมีความหวัง", score: 5, icon: "🚀" },
      { text: "ค่อนข้างมั่นใจ", score: 4, icon: "🌅" },
      { text: "ยังไม่แน่ใจ", score: 3, icon: "🌫️" },
      { text: "ค่อนข้างกังวล", score: 2, icon: "🌧️" },
      { text: "ยังมองไม่เห็นทาง", score: 1, icon: "🌑" }
    ]
  },
  {
    text: "ถ้าให้เลือกคำหนึ่งคำแทนใจตอนนี้ จะเลือกอะไร?",
    answers: [
      { text: "เบิกบาน", score: 5, icon: "🌻" },
      { text: "สบายใจ", score: 4, icon: "🍃" },
      { text: "สับสน", score: 3, icon: "🌀" },
      { text: "เหนื่อย", score: 2, icon: "🌧️" },
      { text: "หนัก", score: 1, icon: "⛈️" }
    ]
  },
  {
    text: "คืนนี้พี่อยากบอกอะไรกับตัวเอง?",
    answers: [
      { text: "เราทำได้ดีแล้ว", score: 5, icon: "💖" },
      { text: "ค่อย ๆ ไปก็ได้", score: 4, icon: "🌱" },
      { text: "พรุ่งนี้ค่อยคิด", score: 3, icon: "🌙" },
      { text: "ขอพักก่อนนะ", score: 2, icon: "🫶" },
      { text: "วันนี้มันหนักจริง ๆ", score: 1, icon: "🤍" }
    ]
  }
];


/* =========================================================
   RESULT TYPES
   ========================================================= */

const results = [
  {
    min: 30,
    max: 35,
    type: "sunny",
    icon: "☀️",
    title: "Sunny Mind",
    label: "ท้องฟ้าสดใส",
    message:
      "ช่วงนี้ใจของพี่มีพลังและความหวังอยู่พอสมควร เหมาะกับการค่อย ๆ ใช้พลังนั้นไปกับสิ่งที่สำคัญกับตัวเองค่ะ",
    color: "#ffd76a"
  },

  {
    min: 24,
    max: 29,
    type: "rainbow",
    icon: "🌈",
    title: "Rainbow Mind",
    label: "หลังฝนมีสีรุ้ง",
    message:
      "แม้จะมีบางเรื่องที่ยังไม่สมบูรณ์ แต่พี่กำลังมองเห็นความเป็นไปได้ใหม่ ๆ อยู่ อย่าลืมให้เครดิตตัวเองกับสิ่งที่ผ่านมาด้วยนะ",
    color: "#b69cff"
  },

  {
    min: 18,
    max: 23,
    type: "cloudy",
    icon: "☁️",
    title: "Cloudy Mind",
    label: "เมฆลอยผ่าน",
    message:
      "ใจอาจกำลังอยู่ในช่วงที่ต้องการความชัดเจนมากขึ้น ไม่จำเป็นต้องรีบหาคำตอบทุกอย่างในวันนี้ก็ได้ค่ะ",
    color: "#9db6ca"
  },

  {
    min: 12,
    max: 17,
    type: "rainy",
    icon: "🌧️",
    title: "Rainy Mind",
    label: "ฝนกำลังตก",
    message:
      "บางทีใจอาจกำลังขอพื้นที่ให้ตัวเองพัก ลองลดความคาดหวังลงสักนิด แล้วดูแลตัวเองเหมือนที่เราจะดูแลคนที่เรารักค่ะ",
    color: "#7eb8e8"
  },

  {
    min: 0,
    max: 11,
    type: "storm",
    icon: "⛈️",
    title: "Stormy Mind",
    label: "พายุในใจ",
    message:
      "ช่วงนี้อาจมีหลายอย่างเกิดขึ้นพร้อมกันจนรู้สึกหนักได้ ไม่จำเป็นต้องจัดการทุกอย่างในครั้งเดียว ลองเลือกเพียงเรื่องเล็ก ๆ หนึ่งเรื่องก่อนค่ะ",
    color: "#9b9cff"
  }
];


/* =========================================================
   STATE
   ========================================================= */

let currentQuestion = 0;
let answers = [];
let totalScore = 0;


/* =========================================================
   DOM
   ========================================================= */

const app = document.getElementById("app");


/* =========================================================
   RENDER
   ========================================================= */

function render(html) {
  app.innerHTML = html;
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   HOME
   ========================================================= */

function showHome() {
  document.body.className =
    document.body.classList.contains("light")
      ? "home light"
      : "home";

  clearEffects();

  render(`
    <section class="hero">

      <div class="hero-copy">

        <div class="eyebrow">
          ✦ A little check-in with yourself
        </div>

        <h1>
          วันนี้ใจของพี่
          <br>
          <span class="gradient-text">อากาศแบบไหน?</span>
        </h1>

        <p>
          ลองใช้เวลาไม่กี่นาทีเช็กอินกับตัวเอง
          ผ่านคำถามง่าย ๆ 7 ข้อ
          แล้วดูว่าวันนี้ “สภาพอากาศของใจ”
          ของพี่เป็นแบบไหน ☁️
        </p>

        <div class="hero-actions">

          <button
            class="primary-btn"
            onclick="startMood()"
          >
            เริ่มเช็กอากาศในใจ ✨
          </button>

          <button
            class="secondary-btn"
            onclick="showHistory()"
          >
            ดูประวัติ ◷
          </button>

        </div>

      </div>


      <div class="hero-visual">

        <div class="weather-orbit">

          <div class="hero-weather-icon">
            🌤️
          </div>

        </div>

        <div class="floating-chip chip-1">
          ☀️ พลังงาน
        </div>

        <div class="floating-chip chip-2">
          ☁️ ความรู้สึก
        </div>

        <div class="floating-chip chip-3">
          🌈 ความหวัง
        </div>

      </div>

    </section>
  `);

  createParticles();
}


/* =========================================================
   START
   ========================================================= */

function startMood() {
  currentQuestion = 0;
  answers = [];
  totalScore = 0;

  showQuestion();
}


/* =========================================================
   QUESTION
   ========================================================= */

function showQuestion() {
  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion) / questions.length) * 100;

  render(`
    <section class="question-wrap">

      <div class="progress-area">

        <div class="progress-meta">

          <span>
            คำถาม ${currentQuestion + 1}
            จาก ${questions.length}
          </span>

          <span>
            ${Math.round(progress)}%
          </span>

        </div>

        <div class="progress-track">

          <div
            class="progress-bar"
            style="width: ${Math.max(progress, 8)}%"
          ></div>

        </div>

      </div>


      <div class="question-card">

        <div class="question-number">
          QUESTION ${String(currentQuestion + 1).padStart(2, "0")}
        </div>

        <h2>
          ${question.text}
        </h2>

        <div class="answers">

          ${question.answers
            .map(
              (answer, index) => `
                <button
                  class="answer-btn"
                  onclick="selectAnswer(${index})"
                >

                  <span class="answer-left">

                    <span class="answer-icon">
                      ${answer.icon}
                    </span>

                    <span>
                      ${answer.text}
                    </span>

                  </span>

                  <span class="answer-arrow">
                    →
                  </span>

                </button>
              `
            )
            .join("")}

        </div>

      </div>

    </section>
  `);
}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(answerIndex) {
  const selected =
    questions[currentQuestion].answers[answerIndex];

  answers.push(selected);
  totalScore += selected.score;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}


/* =========================================================
   GET RESULT
   ========================================================= */

function getResult(score) {
  return (
    results.find(
      result =>
        score >= result.min &&
        score <= result.max
    ) || results[results.length - 1]
  );
}


/* =========================================================
   SHOW RESULT
   ========================================================= */

function showResult() {
  const result = getResult(totalScore);

  const percentage =
    Math.round((totalScore / 35) * 100);

  saveMoodHistory(result);

  document.body.className =
    document.body.classList.contains("light")
      ? `result-page light ${result.type}`
      : `result-page ${result.type}`;

  render(`
    <section class="result-wrap">

      <div class="result-card">

        <div class="result-label">
          ${result.label}
        </div>

        <div class="result-weather">
          ${result.icon}
        </div>

        <h1>
          ${result.title}
        </h1>

        <p class="result-message">
          ${result.message}
        </p>


        <div
          class="score-ring"
          style="--score: ${percentage}"
        >

          <div class="score-number">
            ${totalScore}
            <span>/ 35</span>
          </div>

        </div>


        <div class="result-info">

          <div class="info-box">
            <strong>สภาพอากาศ</strong>
            <span>${result.label}</span>
          </div>

          <div class="info-box">
            <strong>คะแนน</strong>
            <span>${totalScore} / 35</span>
          </div>

          <div class="info-box">
            <strong>วันนี้</strong>
            <span>เช็กอินแล้ว ✨</span>
          </div>

        </div>


        <div class="result-actions">

          <button
            class="primary-btn"
            onclick="startMood()"
          >
            ลองอีกครั้ง ↻
          </button>

          <button
            class="secondary-btn"
            onclick="shareResult()"
          >
            แชร์ผลลัพธ์ ↗
          </button>

          <button
            class="secondary-btn"
            onclick="showHome()"
          >
            กลับหน้าหลัก
          </button>

        </div>

      </div>

    </section>
  `);

  createWeatherEffect(result.type);
}


/* =========================================================
   SAVE HISTORY
   ========================================================= */

function saveMoodHistory(result) {
  const history =
    JSON.parse(
      localStorage.getItem("moodHistory") || "[]"
    );

  history.unshift({
    score: totalScore,
    title: result.title,
    icon: result.icon,
    label: result.label,
    date: new Date().toLocaleString("th-TH", {
      dateStyle: "medium",
      timeStyle: "short"
    })
  });

  /*
    เก็บไว้สูงสุด 20 ครั้ง
  */
  history.splice(20);

  localStorage.setItem(
    "moodHistory",
    JSON.stringify(history)
  );
}


/* =========================================================
   HISTORY
   ========================================================= */

function showHistory() {
  clearEffects();

  const history =
    JSON.parse(
      localStorage.getItem("moodHistory") || "[]"
    );

  document.body.className =
    document.body.classList.contains("light")
      ? "history-page light"
      : "history-page";

  if (history.length === 0) {
    render(`
      <section class="history-wrap">

        <div class="section-title">
          <h1>ประวัติของใจ</h1>
          <p>
            ผลลัพธ์ที่พี่เคยเช็กอินไว้
          </p>
        </div>

        <div class="empty-state">
          <div style="font-size: 3rem; margin-bottom: 15px;">
            ☁️
          </div>

          <div>
            ยังไม่มีประวัติ
          </div>

          <div style="margin-top: 8px;">
            ลองเช็กอากาศในใจครั้งแรกกันไหม?
          </div>

          <button
            class="primary-btn"
            style="margin-top: 22px;"
            onclick="startMood()"
          >
            เริ่มเลย ✨
          </button>

        </div>

      </section>
    `);

    return;
  }


  render(`
    <section class="history-wrap">

      <div class="section-title">

        <h1>
          ประวัติของใจ
        </h1>

        <p>
          ทุกครั้งที่เช็กอิน
          คือข้อมูลเล็ก ๆ ที่ช่วยให้เราเห็นตัวเองมากขึ้น
        </p>

      </div>


      <div class="history-list">

        ${history
          .map(
            item => `
              <div class="history-item">

                <div class="history-icon">
                  ${item.icon}
                </div>

                <div class="history-main">

                  <strong>
                    ${item.title}
                  </strong>

                  <span>
                    ${item.label} · ${item.date}
                  </span>

                </div>

                <div class="history-score">
                  ${item.score}/35
                </div>

              </div>
            `
          )
          .join("")}

      </div>


      <button
        class="clear-history"
        onclick="clearHistory()"
      >
        ล้างประวัติทั้งหมด
      </button>

    </section>
  `);
}


/* =========================================================
   CLEAR HISTORY
   ========================================================= */

function clearHistory() {
  const confirmed =
    confirm("ต้องการล้างประวัติทั้งหมดหรือไม่?");

  if (!confirmed) return;

  localStorage.removeItem("moodHistory");

  showHistory();
}


/* =========================================================
   SHARE RESULT
   ========================================================= */

async function shareResult() {
  const result = getResult(totalScore);

  const text =
    `วันนี้สภาพอากาศในใจของฉันคือ ${result.title} ${result.icon}\n` +
    `คะแนน ${totalScore}/35\n\n` +
    `${result.message}\n\n` +
    `Mood Weather — สภาพอากาศของใจ`;

  try {

    if (navigator.share) {

      await navigator.share({
        title: "Mood Weather",
        text: text
      });

    } else if (navigator.clipboard) {

      await navigator.clipboard.writeText(text);

      alert("คัดลอกผลลัพธ์แล้ว ✨");

    } else {

      alert(text);

    }

  } catch (error) {

    /*
      ผู้ใช้กดยกเลิก Share
      ไม่ต้องแสดง error
    */

    if (error.name !== "AbortError") {
      console.error(error);
    }

  }
}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {
  document.body.classList.toggle("light");

  const isLight =
    document.body.classList.contains("light");

  localStorage.setItem(
    "mwTheme",
    isLight ? "light" : "dark"
  );

  updateThemeButton();
}


/* =========================================================
   THEME BUTTON
   ========================================================= */

function updateThemeButton() {
  const button =
    document.getElementById("themeBtn");

  if (!button) return;

  const isLight =
    document.body.classList.contains("light");

  button.textContent =
    isLight ? "☀️" : "◐";
}


/* =========================================================
   LOAD THEME
   ========================================================= */

function loadTheme() {
  const theme =
    localStorage.getItem("mwTheme");

  if (theme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  updateThemeButton();
}


/* =========================================================
   PARTICLES
   ========================================================= */

function createParticles() {
  const container =
    document.getElementById("particles");

  if (!container) return;

  container.innerHTML = "";

  const amount =
    window.innerWidth < 600 ? 18 : 30;

  for (let i = 0; i < amount; i++) {

    const particle =
      document.createElement("span");

    particle.className = "particle";

    particle.style.left =
      `${Math.random() * 100}%`;

    particle.style.animationDuration =
      `${6 + Math.random() * 8}s`;

    particle.style.animationDelay =
      `${Math.random() * -10}s`;

    particle.style.transform =
      `scale(${0.5 + Math.random()})`;

    container.appendChild(particle);
  }
}


/* =========================================================
   WEATHER EFFECT
   ========================================================= */

function createWeatherEffect(type) {
  clearEffects();

  const card =
    document.querySelector(".result-card");

  if (!card) return;

  const effect =
    document.createElement("div");

  effect.className = "weather-effect";

  card.appendChild(effect);


  /* -------------------------------------------------------
     RAIN
     ------------------------------------------------------- */

  if (type === "rainy" || type === "storm") {

    const amount =
      type === "storm" ? 60 : 35;

    for (let i = 0; i < amount; i++) {

      const drop =
        document.createElement("span");

      drop.className = "rain-drop";

      drop.style.left =
        `${Math.random() * 100}%`;

      drop.style.animationDuration =
        `${0.45 + Math.random() * 0.6}s`;

      drop.style.animationDelay =
        `${Math.random() * -2}s`;

      drop.style.opacity =
        `${0.2 + Math.random() * 0.6}`;

      effect.appendChild(drop);
    }
  }


  /* -------------------------------------------------------
     SUN
     ------------------------------------------------------- */

  if (type === "sunny") {

    for (let i = 0; i < 10; i++) {

      const ray =
        document.createElement("span");

      ray.className = "sun-ray";

      const angle =
        i * 36;

      ray.style.left = "50%";
      ray.style.top = "50%";

      ray.style.transform =
        `translate(-50%, -50%) rotate(${angle}deg) translateY(-150px)`;

      ray.style.animationDelay =
        `${i * -0.2}s`;

      effect.appendChild(ray);
    }
  }


  /* -------------------------------------------------------
     RAINBOW
     ------------------------------------------------------- */

  if (type === "rainbow") {

    const rainbow =
      document.createElement("div");

    rainbow.style.position = "absolute";
    rainbow.style.left = "50%";
    rainbow.style.top = "50%";
    rainbow.style.width = "260px";
    rainbow.style.height = "130px";
    rainbow.style.transform =
      "translate(-50%, -30%)";
    rainbow.style.borderRadius =
      "260px 260px 0 0";

    rainbow.style.border =
      "12px solid rgba(255,120,120,.15)";

    rainbow.style.boxShadow =
      "0 -18px 0 rgba(255,190,80,.12)," +
      "0 -36px 0 rgba(120,220,160,.12)," +
      "0 -54px 0 rgba(100,170,255,.12)," +
      "0 -72px 0 rgba(180,130,255,.12)";

    rainbow.style.pointerEvents = "none";

    effect.appendChild(rainbow);
  }
}


/* =========================================================
   CLEAR EFFECTS
   ========================================================= */

function clearEffects() {
  document
    .querySelectorAll(".weather-effect")
    .forEach(element => element.remove());
}


/* =========================================================
   INITIALIZE
   ========================================================= */

loadTheme();
showHome();


/* =========================================================
   RESIZE
   ========================================================= */

window.addEventListener("resize", () => {

  /*
    สร้าง particle ใหม่เมื่อเปลี่ยนขนาดจอ
    เฉพาะตอนอยู่หน้าหลัก
  */

  if (
    document.body.classList.contains("home")
  ) {
    createParticles();
  }

});