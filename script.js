const questions = [
    {
        question: "เช้านี้ตื่นมารู้สึกอย่างไร?",
        answers: [
            ["☀️ สดใสมาก พร้อมเริ่มวัน", 5],
            ["🙂 ค่อนข้างโอเค", 4],
            ["😐 เฉย ๆ", 3],
            ["🌥️ ยังไม่ค่อยพร้อม", 2],
            ["🌧️ อยากนอนต่อ ไม่อยากทำอะไร", 1]
        ]
    },

    {
        question: "ถ้ามีงานหลายอย่างเข้ามาพร้อมกัน คุณจะรู้สึกอย่างไร?",
        answers: [
            ["⚡ เอามาเลย จัดการทีละอย่าง", 5],
            ["💪 รับมือได้", 4],
            ["😐 ต้องขอดูก่อน", 3],
            ["😵 เริ่มรู้สึกกดดัน", 2],
            ["🌧️ อยากหนีไปพักก่อน", 1]
        ]
    },

    {
        question: "วันนี้คุณอยากเจอผู้คนแค่ไหน?",
        answers: [
            ["🎉 อยากเจอทุกคนเลย", 5],
            ["😊 อยากคุยกับเพื่อน", 4],
            ["🙂 แล้วแต่สถานการณ์", 3],
            ["🌙 อยากอยู่กับตัวเองมากกว่า", 2],
            ["💤 ขออยู่เงียบ ๆ คนเดียว", 1]
        ]
    },

    {
        question: "เวลามีเรื่องให้คิด คุณจัดการกับมันอย่างไร?",
        answers: [
            ["🧠 คิดเป็นขั้นตอนและหาทางแก้", 5],
            ["🔎 ค่อย ๆ คิดจนเจอทางออก", 4],
            ["😐 ปล่อยให้เวลาช่วย", 3],
            ["🌪️ คิดวนอยู่บ่อย ๆ", 2],
            ["🌧️ พยายามไม่คิดถึงมัน", 1]
        ]
    },

    {
        question: "ถ้าวันนี้มีเวลาว่าง 2 ชั่วโมง คุณอยากทำอะไร?",
        answers: [
            ["🚀 ทำสิ่งที่อยากทำให้สำเร็จ", 5],
            ["🎮 ทำกิจกรรมที่ชอบ", 4],
            ["☕ พักผ่อนสบาย ๆ", 3],
            ["🛌 นอนหรืออยู่เฉย ๆ", 2],
            ["🌙 ไม่อยากทำอะไรเป็นพิเศษ", 1]
        ]
    },

    {
        question: "ถ้าเพื่อนชวนไปทำอะไรแบบกะทันหัน คุณจะ...",
        answers: [
            ["🎉 ไปเลย! น่าสนุก", 5],
            ["😄 ถ้าว่างก็ไป", 4],
            ["🤔 ขอคิดดูก่อน", 3],
            ["🌙 วันนี้ขอผ่าน", 2],
            ["💤 อยากอยู่คนเดียวมากกว่า", 1]
        ]
    },

    {
        question: "ถ้าให้เลือกคำหนึ่งคำแทนวันนี้ คุณจะเลือกอะไร?",
        answers: [
            ["☀️ สดใส", 5],
            ["🌈 มีความหวัง", 4],
            ["☁️ เรื่อย ๆ", 3],
            ["🌧️ เหนื่อย", 2],
            ["⛈️ หนักหน่วง", 1]
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");

function startGame() {
    currentQuestion = 0;
    totalScore = 0;

    startScreen.style.display = "none";
    questionScreen.style.display = "block";

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `คำถามที่ ${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("question-text").textContent =
        question.question;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach((answer) => {

        const button = document.createElement("button");

        button.className = "answer-button";
        button.textContent = answer[0];

        button.onclick = function () {
            selectAnswer(answer[1]);
        };

        answersContainer.appendChild(button);
    });
}

function selectAnswer(score) {

    totalScore += score;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {

    let weather;
    let message;

    if (totalScore >= 30) {
        weather = "☀️ Sunny Mind";
        message = "วันนี้ใจของคุณดูมีพลังและพร้อมเปิดรับสิ่งต่าง ๆ";
    } 
    else if (totalScore >= 24) {
        weather = "🌈 Rainbow Mind";
        message = "วันนี้อาจมีทั้งช่วงที่สดใสและช่วงที่ต้องหยุดพัก";
    } 
    else if (totalScore >= 18) {
        weather = "☁️ Cloudy Mind";
        message = "วันนี้อาจเป็นวันที่ค่อนข้างกลาง ๆ ลองทำสิ่งเล็ก ๆ ที่ทำให้รู้สึกดี";
    } 
    else if (totalScore >= 12) {
        weather = "🌧️ Rainy Mind";
        message = "วันนี้คุณอาจต้องการพื้นที่และเวลามากขึ้น";
    } 
    else {
        weather = "⛈️ Stormy Mind";
        message = "วันนี้อาจรู้สึกหนักกว่าปกติ ลองลดสิ่งที่ไม่จำเป็นลง";
    }

    questionScreen.innerHTML = `
        <div class="result">
            <div class="result-icon">${weather.split(" ")[0]}</div>

            <h2>${weather.substring(2)}</h2>

            <div class="score">
                ${totalScore} / 35
            </div>

            <p>${message}</p>

            <button onclick="location.reload()">
                🔄 สำรวจอีกครั้ง
            </button>
        </div>
    `;
}