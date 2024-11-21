document.getElementById("submitBtn").addEventListener("click", function() {
  const answers = {
q1: "Struktur tanah di pegunungan",  
q2: "Pola distribusi penduduk",  
q3: "Keberadaan flora dan fauna",  
q4: "Kelingkungan",  
q5: "Persebaran penduduk di dunia",  
q6: "Penyebab dan akibat perubahan lingkungan",  
q7: "Letak geografis wilayah",  
q8: "Konsentrasi kegiatan di suatu tempat",  
q9: "Orientasi",  
q10: "Rencana pembangunan jalan",  
q11: "Sumber energi",  
q12: "Pola",  
q13: "Hardware",  
q14: "Membuat zona pengaruh tertentu",  
q15: "Problem-solving",  
q16: "Data dari instansi resmi",  
q17: "Berkelompok",  
q18: "Iklim dan jenis tanah",  
q19: "Gabungan prinsip lainnya",  
q20: "Menampilkan citra satelit",
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
