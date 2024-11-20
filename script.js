document.getElementById("submitBtn").addEventListener("click", function() {
  const answers = {
    q1: "Menghibur dan mengandung kritik sosial",
q2: "Orientasi",
q3: "Berlari, melompat, menulis",
q4: "Adanya pesan moral atau kritik dalam anekdot",
q5: "Reaksi",
q6: "Memuat kisah-kisah fiksi penuh keajaiban",
q7: "Penutup",
q8: "Alkisah, hiduplah seorang raja yang bijaksana",
q9: "Dongeng lebih mengutamakan nilai hiburan daripada nilai moral",
q10: "Menanamkan nilai moral dan keagamaan"
  };

  let score = 0;
  const form = document.getElementById("quizForm");
  const resultDiv = document.getElementById("result");

  // Periksa setiap jawaban
  for (const question in answers) {
    const userAnswer = form.elements[question].value;
    if (userAnswer === answers[question]) {
      score++;
    }
  }

  // Tampilkan hasil
  const totalQuestions = Object.keys(answers).length;
  resultDiv.innerHTML = `Kamu menjawab benar ${score} dari ${totalQuestions} soal.`;
});
