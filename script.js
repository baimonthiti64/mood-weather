/* =========================================================
   MOOD WEATHER V2
   เวอร์ชันฮีลใจ
   ========================================================= */


/* =========================================================
   คำถาม
   ========================================================= */

const questions = [
  {
    text: "วันนี้ตื่นมารู้สึกยังไงกับตัวเอง?",
    answers: [
      {
        text: "สดใสและพร้อมเริ่มต้นวันใหม่",
        score: 5,
        icon: "☀️"
      },
      {
        text: "โอเค ค่อย ๆ ไปก็ได้",
        score: 4,
        icon: "🌤️"
      },
      {
        text: "ยังมึน ๆ อยากใช้เวลาสักหน่อย",
        score: 3,
        icon: "☁️"
      },
      {
        text: "รู้สึกเหนื่อยตั้งแต่เริ่มวัน",
        score: 2,
        icon: "🌧️"
      },
      {
        text: "วันนี้ไม่ค่อยไหวเลย",
        score: 1,
        icon: "⛈️"
      }
    ]
  },

  {
    text: "ช่วงนี้หัวใจของคุณกำลังเป็นแบบไหน?",
    answers: [
      {
        text: "มีพลังและอยากทำอะไรหลายอย่าง",
        score: 5,
        icon: "✨"
      },
      {
        text: "สบาย ๆ ใช้ชีวิตไปทีละวัน",
        score: 4,
        icon: "🌿"
      },
      {
        text: "บางวันดี บางวันก็เหนื่อย",
        score: 3,
        icon: "〰️"
      },
      {
        text: "รู้สึกหมดพลังง่ายกว่าปกติ",
        score: 2,
        icon: "🫠"
      },
      {
        text: "อยากหยุดพักจากทุกอย่างสักพัก",
        score: 1,
        icon: "🛌"
      }
    ]
  },

  {
    text: "ถ้ามีเรื่องไม่คาดคิดเกิดขึ้น คุณมักจะทำอย่างไร?",
    answers: [
      {
        text: "ค่อย ๆ ตั้งสติแล้วแก้ไปทีละเรื่อง",
        score: 5,
        icon: "🌱"
      },
      {
        text: "กังวลบ้าง แต่ยังพอรับมือได้",
        score: 4,
        icon: "💛"
      },
      {
        text: "ขอเวลาตั้งหลักก่อน",
        score: 3,
        icon: "🧘"
      },
      {
        text: "รู้สึกกดดันจนไม่รู้จะเริ่มตรงไหน",
        score: 2,
        icon: "😵‍💫"
      },
      {
        text: "รู้สึกเหมือนทุกอย่างถาโถมเข้ามาพร้อมกัน",
        score: 1,
        icon: "🌪️"
      }
    ]
  },

  {
    text: "ตอนนี้สิ่งที่หัวใจอยากได้มากที่สุดคืออะไร?",
    answers: [
      {
        text: "โอกาสใหม่ ๆ และแรงบันดาลใจ",
        score: 5,
        icon: "🌈"
      },
      {
        text: "เวลาให้ตัวเองได้หายใจ",
        score: 4,
        icon: "🍃"
      },
      {
        text: "ความชัดเจนในสิ่งที่กำลังเจอ",
        score: 3,
        icon: "🔎"
      },
      {
        text: "การพักผ่อนแบบไม่ต้องรู้สึกผิด",
        score: 2,
        icon: "☕"
      },
      {
        text: "อยากวางทุกอย่างลงแล้วพักก่อน",
        score: 1,
        icon: "🏝️"
      }
    ]
  },

  {
    text: "เมื่อมองไปข้างหน้า คุณรู้สึกอย่างไร?",
    answers: [
      {
        text: "รู้สึกตื่นเต้นและมีความหวัง",
        score: 5,
        icon: "🚀"
      },
      {
        text: "เชื่อว่าทุกอย่างจะค่อย ๆ ดีขึ้น",
        score: 4,
        icon: "🌅"
      },
      {
        text: "ยังไม่รู้ แต่พร้อมค่อย ๆ ค้นหา",
        score: 3,
        icon: "🌫️"
      },
      {
        text: "มีหลายเรื่องที่ทำให้กังวล",
        score: 2,
        icon: "🌧️"
      },
      {
        text: "ตอนนี้ยังมองไม่เห็นทางเลย",
        score: 1,
        icon: "🌑"
      }
    ]
  },

  {
    text: "ถ้าให้เลือกหนึ่งคำแทนความรู้สึกตอนนี้ จะเลือกคำไหน?",
    answers: [
      {
        text: "เบิกบาน",
        score: 5,
        icon: "🌻"
      },
      {
        text: "สบายใจ",
        score: 4,
        icon: "🍃"
      },
      {
        text: "สับสน",
        score: 3,
        icon: "🌀"
      },
      {
        text: "เหนื่อย",
        score: 2,
        icon: "🌧️"
      },
      {
        text: "หนักใจ",
        score: 1,
        icon: "🤍"
      }
    ]
  },

  {
    text: "ถ้าคืนนี้ได้ฝากข้อความหนึ่งประโยคไว้ให้ตัวเอง คุณอยากบอกว่าอะไร?",
    answers: [
      {
        text: "เราทำดีที่สุดแล้วนะ",
        score: 5,
        icon: "💖"
      },
      {
        text: "ค่อย ๆ ไปก็ได้ ไม่ต้องรีบ",
        score: 4,
        icon: "🌱"
      },
      {
        text: "พรุ่งนี้ค่อยคิด วันนี้พักก่อน",
        score: 3,
        icon: "🌙"
      },
      {
        text: "เหนื่อยได้ พักได้ ไม่ต้องรู้สึกผิด",
        score: 2,
        icon: "🫶"
      },
      {
        text: "วันนี้มันหนักจริง ๆ และเราผ่านมันมาแล้ว",
        score: 1,
        icon: "🤍"
      }
    ]
  }
];


/* =========================================================
   ผลลัพธ์
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
      "วันนี้หัวใจมีแสงสว่างอยู่ในตัวเองนะ 🌻 ใช้พลังที่มีไปกับสิ่งที่สำคัญกับคุณ และอย่าลืมว่าไม่จำเป็นต้องเก่งหรือเข้มแข็งตลอดเวลา แค่เป็นตัวเองในแบบที่สบายใจก็เพียงพอแล้ว",
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
      "บางช่วงของชีวิตอาจไม่ได้สวยงามทุกวัน แต่หลังฝนย่อมมีท้องฟ้าใหม่เสมอ 🌈 สิ่งที่กำลังพยายามอยู่มีความหมาย และวันนี้ก็เก่งมากแล้วที่ยังเดินต่อมาได้",
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
      "ถ้าวันนี้ยังมองอะไรไม่ชัดก็ไม่เป็นไรนะ ☁️ บางคำตอบไม่จำเป็นต้องเกิดขึ้นในวันนี้ ลองพักหายใจ แล้วปล่อยให้เวลาและหัวใจค่อย ๆ พาไป",
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
      "ถ้าวันนี้เหนื่อย ก็พักได้เลยนะ 🌧️ การดูแลหัวใจตัวเองไม่ใช่ความอ่อนแอ ไม่จำเป็นต้องรีบกลับมาเข้มแข็ง และพรุ่งนี้ค่อยเริ่มใหม่ก็ยังทันเสมอ",
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
      "ถ้าวันนี้รู้สึกหนักมาก ขอให้รู้ไว้ว่าความรู้สึกนี้ไม่จำเป็นต้องอยู่กับเราตลอดไป ⛈️ ค่อย ๆ หายใจ ค่อย ๆ ผ่านช่วงเวลานี้ไปทีละนิด ไม่ต้องแก้ทุกอย่างในวันนี้ก็ได้",
    color: "#9b9cff"
  }
];


/* =========================================================
   ตัวแปรหลัก
   ========================================================= */

let currentQuestion = 0;
let answers = [];
let totalScore = 0;

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
   หน้าแรก
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
          วันนี้ใจของคุณ
          <br>
          <span class="gradient-text">
            อากาศแบบไหน?
          </span>
        </h1>

        <p>
          ลองใช้เวลาไม่กี่นาทีเช็กอินกับตัวเอง
          ผ่านคำถามง่าย ๆ 7 ข้อ
          แล้วมาดูกันว่าวันนี้
          “สภาพอากาศของใจ” เป็นแบบไหน ☁️
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
   เริ่มทำแบบประเมิน
   ========================================================= */

function startMood() {

  currentQuestion = 0;
  answers = [];
  totalScore = 0;

  showQuestion();
}


/* =========================================================
   แสดงคำถาม
   ========================================================= */

function showQuestion() {

  const question =
    questions[currentQuestion];

  const progress =
    (currentQuestion / questions.length) * 100;

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
          QUESTION ${String(
            currentQuestion + 1
          ).padStart(2, "0")}
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
   เลือกคำตอบ
   ========================================================= */

function selectAnswer(answerIndex) {

  const selected =
    questions[currentQuestion]
      .answers[answerIndex];

  answers.push(selected);

  totalScore += selected.score;

  currentQuestion++;

  if (
    currentQuestion <
    questions.length
  ) {

    showQuestion();

  } else {

    showResult();

  }
}


/* =========================================================
   หาผลลัพธ์
   ========================================================= */

function getResult(score) {

  return (
    results.find(
      result =>
        score >= result.min &&
        score <= result.max
    ) ||
    results[results.length - 1]
  );
}


/* =========================================================
   แสดงผลลัพธ์
   ========================================================= */

function showResult() {

  const result =
    getResult(totalScore);

  const percentage =
    Math.round(
      (totalScore / 35) * 100
    );

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

            <strong>
              สภาพอากาศ
            </strong>

            <span>
              ${result.label}
            </span>

          </div>


          <div class="info-box">

            <strong>
              คะแนน
            </strong>

            <span>
              ${totalScore} / 35
            </span>

          </div>


          <div class="info-box">

            <strong>
              วันนี้
            </strong>

            <span>
              เช็กอินแล้ว ✨
            </span>

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

  createWeatherEffect(
    result.type
  );
}


/* =========================================================
   บันทึกประวัติ
   ========================================================= */

function saveMoodHistory(result) {

  const history =
    JSON.parse(
      localStorage.getItem(
        "moodHistory"
      ) || "[]"
    );

  history.unshift({

    score: totalScore,

    title: result.title,

    icon: result.icon,

    label: result.label,

    date:
      new Date().toLocaleString(
        "th-TH",
        {
          dateStyle: "medium",
          timeStyle: "short"
        }
      )

  });

  history.splice(20);

  localStorage.setItem(
    "moodHistory",
    JSON.stringify(history)
  );
}


/* =========================================================
   ประวัติ
   ========================================================= */

function showHistory() {

  clearEffects();

  const history =
    JSON.parse(
      localStorage.getItem(
        "moodHistory"
      ) || "[]"
    );

  document.body.className =
    document.body.classList.contains("light")
      ? "history-page light"
      : "history-page";


  /* ไม่มีประวัติ */

  if (history.length === 0) {

    render(`
      <section class="history-wrap">

        <div class="section-title">

          <h1>
            ประวัติของใจ
          </h1>

          <p>
            ทุกครั้งที่เช็กอิน
            คือเวลาสั้น ๆ ที่ได้กลับมาฟังตัวเอง
          </p>

        </div>


        <div class="empty-state">

          <div
            style="
              font-size: 3rem;
              margin-bottom: 15px;
            "
          >
            ☁️
          </div>

          <div>
            ยังไม่มีประวัติ
          </div>

          <div
            style="
              margin-top: 8px;
            "
          >
            ลองใช้เวลาสักครู่
            เพื่อกลับมาฟังหัวใจตัวเองนะ
          </div>

          <button
            class="primary-btn"
            style="margin-top: 22px;"
            onclick="startMood()"
          >
            เริ่มเช็กอิน ✨
          </button>

        </div>

      </section>
    `);

    return;
  }


  /* มีประวัติ */

  render(`
    <section class="history-wrap">

      <div class="section-title">

        <h1>
          ประวัติของใจ
        </h1>

        <p>
          ทุกครั้งที่เช็กอิน
          คือข้อมูลเล็ก ๆ
          ที่ช่วยให้เราเห็นตัวเองมากขึ้น
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
                    ${item.label}
                    ·
                    ${item.date}
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
   ล้างประวัติ
   ========================================================= */

function clearHistory() {

  const confirmed =
    confirm(
      "ต้องการล้างประวัติทั้งหมดหรือไม่?"
    );

  if (!confirmed) return;

  localStorage.removeItem(
    "moodHistory"
  );

  showHistory();
}


/* =========================================================
   แชร์ผลลัพธ์
   ========================================================= */

async function shareResult() {

  const result =
    getResult(totalScore);

  const text =
    `วันนี้สภาพอากาศในใจของฉันคือ ${result.title} ${result.icon}\n\n` +
    `คะแนน ${totalScore}/35\n\n` +
    `${result.message}\n\n` +
    `Mood Weather — สภาพอากาศของใจ`;

  try {

    if (navigator.share) {

      await navigator.share({
        title: "Mood Weather",
        text: text
      });

    }

    else if (navigator.clipboard) {

      await navigator.clipboard.writeText(
        text
      );

      alert(
        "คัดลอกข้อความแล้ว ✨"
      );

    }

    else {

      alert(text);

    }

  }

  catch (error) {

    if (
      error.name !==
      "AbortError"
    ) {

      console.error(error);

    }

  }
}


/* =========================================================
   เปลี่ยนธีม
   ========================================================= */

function toggleTheme() {

  document.body.classList.toggle(
    "light"
  );

  const isLight =
    document.body.classList.contains(
      "light"
    );

  localStorage.setItem(
    "mwTheme",
    isLight
      ? "light"
      : "dark"
  );

  updateThemeButton();
}


/* =========================================================
   ปุ่มเปลี่ยนธีม
   ========================================================= */

function updateThemeButton() {

  const button =
    document.getElementById(
      "themeBtn"
    );

  if (!button) return;

  const isLight =
    document.body.classList.contains(
      "light"
    );

  button.textContent =
    isLight
      ? "☀️"
      : "◐";
}


/* =========================================================
   โหลดธีม
   ========================================================= */

function loadTheme() {

  const theme =
    localStorage.getItem(
      "mwTheme"
    );

  if (theme === "light") {

    document.body.classList.add(
      "light"
    );

  }

  else {

    document.body.classList.remove(
      "light"
    );

  }

  updateThemeButton();
}


/* =========================================================
   PARTICLES
   ========================================================= */

function createParticles() {

  const container =
    document.getElementById(
      "particles"
    );

  if (!container) return;

  container.innerHTML = "";

  const amount =
    window.innerWidth < 600
      ? 18
      : 30;

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const particle =
      document.createElement(
        "span"
      );

    particle.className =
      "particle";

    particle.style.left =
      `${Math.random() * 100}%`;

    particle.style.animationDuration =
      `${6 + Math.random() * 8}s`;

    particle.style.animationDelay =
      `${Math.random() * -10}s`;

    particle.style.transform =
      `scale(${0.5 + Math.random()})`;

    container.appendChild(
      particle
    );
  }
}


/* =========================================================
   WEATHER EFFECT
   ========================================================= */

function createWeatherEffect(type) {

  clearEffects();

  const card =
    document.querySelector(
      ".result-card"
    );

  if (!card) return;

  const effect =
    document.createElement(
      "div"
    );

  effect.className =
    "weather-effect";

  card.appendChild(effect);


  /* ฝน */

  if (
    type === "rainy" ||
    type === "storm"
  ) {

    const amount =
      type === "storm"
        ? 60
        : 35;

    for (
      let i = 0;
      i < amount;
      i++
    ) {

      const drop =
        document.createElement(
          "span"
        );

      drop.className =
        "rain-drop";

      drop.style.left =
        `${Math.random() * 100}%`;

      drop.style.animationDuration =
        `${0.45 + Math.random() * 0.6}s`;

      drop.style.animationDelay =
        `${Math.random() * -2}s`;

      drop.style.opacity =
        `${0.2 + Math.random() * 0.6}`;

      effect.appendChild(
        drop
      );
    }
  }


  /* แสงแดด */

  if (type === "sunny") {

    for (
      let i = 0;
      i < 10;
      i++
    ) {

      const ray =
        document.createElement(
          "span"
        );

      ray.className =
        "sun-ray";

      const angle =
        i * 36;

      ray.style.left =
        "50%";

      ray.style.top =
        "50%";

      ray.style.transform =
        `translate(-50%, -50%)
         rotate(${angle}deg)
         translateY(-150px)`;

      ray.style.animationDelay =
        `${i * -0.2}s`;

      effect.appendChild(
        ray
      );
    }
  }


  /* สีรุ้ง */

  if (type === "rainbow") {

    const rainbow =
      document.createElement(
        "div"
      );

    rainbow.style.position =
      "absolute";

    rainbow.style.left =
      "50%";

    rainbow.style.top =
      "50%";

    rainbow.style.width =
      "260px";

    rainbow.style.height =
      "130px";

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

    rainbow.style.pointerEvents =
      "none";

    effect.appendChild(
      rainbow
    );
  }
}


/* =========================================================
   ล้าง Effect
   ========================================================= */

function clearEffects() {

  document
    .querySelectorAll(
      ".weather-effect"
    )
    .forEach(
      element =>
        element.remove()
    );
}


/* =========================================================
   เริ่มต้นระบบ
   ========================================================= */

loadTheme();

showHome();


/* =========================================================
   ปรับ PARTICLES ตามขนาดหน้าจอ
   ========================================================= */

window.addEventListener(
  "resize",
  () => {

    if (
      document.body.classList.contains(
        "home"
      )
    ) {

      createParticles();

    }

  }
);