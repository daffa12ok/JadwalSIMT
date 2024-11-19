// Event listener untuk tombol Kirim
document.getElementById("submitBtn").addEventListener("click", function () {
  const answers = {
    q1: "Natrium (Na)",
    q2: "Dmitri Mendeleev",
    q3: "K > Na > Mg > Cl",
    q4: "Nomor atom",
    q5: "Fluorin (F)",
    q6: "Alkali dan Gas Mulia",
    q7: "Memiliki jumlah elektron valensi yang sama",
    q8: "Menurun dari atas ke bawah dalam satu golongan karena peningkatan jarak antara elektron valensi dan inti atom.",
    q9: "Menurun",
    q10: "F > Cl > Br > I"
  };

  let score = 0;
  const form = document.getElementById("quizForm");
  const resultDiv = document.getElementById("result");

  // Periksa jawaban setiap soal
  for (const question in answers) {
    const userAnswer = form.elements[question]?.value || ""; // Hindari error jika elemen tidak ditemukan
    if (userAnswer === answers[question]) {
      score++;
    }
  }

  // Data untuk dikirim ke Google Sheets
  const data = {
    name: document.getElementById("name")?.value || "Anonymous", // Nama dari input "name"
    score: score,
    totalQuestions: Object.keys(answers).length,
    answers: Object.keys(answers).map((q) => ({
      question: q,
      userAnswer: form.elements[q]?.value || "Tidak dijawab",
      correctAnswer: answers[q]
    }))
  };

  sendQuizResults(data.name, data.score, data.totalQuestions); // Kirim hasil ke Google Sheets
});

// Fungsi untuk mengirim hasil quiz ke Google Sheets
function sendQuizResults(name, score, totalQuestions) {
  const url =
    "https://script.google.com/macros/s/AKfycbwGO6bDAmGC1Z6q9LwRHGaDXGbIorTFhe1n12nDVUqALW9kNpJXKPsMzRlEUzm-KP5G/exec"; // Ganti dengan URL Web App Anda

  const data = {
    name: name,
    score: score,
    totalQuestions: totalQuestions
  };

  fetch(url, {
    method: "POST",
    mode: "no-cors", // Untuk mengatasi masalah CORS
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(() => {
      console.log("Data berhasil dikirim!");
      alert(`Kamu menjawab benar ${score} dari ${totalQuestions} soal.`);
    })
    .catch((error) => {
      console.error("Gagal mengirim data:", error);
      alert("Terjadi kesalahan saat mengirim data.");
    });
}

// Timer untuk menghitung mundur waktu
let timeLeft = 300; // Timer dalam detik (5 menit)
const timerElement = document.getElementById("timer");

// Fungsi untuk menghitung mundur waktu
function startTimer() {
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      alert("Waktu habis! Jawaban akan dikirim otomatis.");
      document.getElementById("submitBtn").click(); // Simulasi klik tombol Kirim
    }
  }, 1000);
}

// Mulai timer ketika halaman dimuat
window.onload = startTimer;
