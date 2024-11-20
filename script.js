document.getElementById("submitBtn").addEventListener("click", function() {
  const answers = {
q1: "Menghibur dan mengandung kritik sosial",
q2: "Orientasi – Abstraksi – Krisis – Reaksi – Koda",
q3: "Menggunakan kalimat langsung dan tidak langsung",
q4: "Hikayat berisi kisah tokoh dengan kehebatan luar biasa, sedangkan anekdot lebih realistis",
q5: "Mengandung unsur mitos dan keajaiban",
q6: "Pembukaan – Isi – Penutup",
q7: "Kalimat dengan ungkapan hiperbolis",
q8: "Hikayat Hang Tuah",
q9: "Menghibur dan menyampaikan kritik secara tidak langsung",
q10: "Pada akhirnya, semua orang pun tertawa melihat kejadiannya."
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
