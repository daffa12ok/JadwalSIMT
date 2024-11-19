document.getElementById("submitBtn").addEventListener("click", function() {
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
