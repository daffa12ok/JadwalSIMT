document.getElementById("submitBtn").addEventListener("click", function() {
  const answers = {
q1: "Hidup dengan mengutamakan konsumsi berlebihan untuk kesenangan diri",
q2: "Mengurangi kualitas hubungan sosial",
q3: "Melakukan ibadah untuk mendapatkan pujian",
q4: "Menganggap diri lebih tinggi daripada orang lain",
q5: "Dapat merusak hubungan antar sesama",
q6: "Menjaga keseimbangan antara kebutuhan duniawi dan spiritual",
q7: "Rasa syukur dan keikhlasan dalam beramal",
q8: "Karena merasa diri lebih tahu dan lebih baik",
q9: "Menumbuhkan sikap iri terhadap keberhasilan orang lain",
q10: "Hidup sederhana dan mengutamakan kebutuhan orang lain",
q11: "Menghindari unsur riba dan gharar",
q12: "Bertransaksi berdasarkan prinsip keadilan dan berbagi risiko",
q13: "Meningkatkan kesejahteraan bersama dengan berbagi hasil",
q14: "Keuntungan yang adil dan berbagi risiko",
q15: "Koperasi syariah mengutamakan prinsip keadilan dan larangan riba",
q16: "Membantu sesama peserta yang membutuhkan",
q17: "Riba",
q18: "Meningkatkan solidaritas dan kesejahteraan bersama",
q19: "Kebutuhan umum sesuai prinsip syariah",
q20: "Transaksi tidak melibatkan unsur spekulasi atau riba",
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
