document.getElementById("submitBtn").addEventListener("click", function() {
  const answers = {
q1: "Kerja sama antara bank dan nasabah untuk berbagi keuntungan dan kerugian sesuai dengan kontribusi modal masing-masing",
q2: "Prinsip gharar",
q3: "Nasabah bertanggung jawab atas semua kerugian yang terjadi",
q4: "Keuntungan berdasarkan pembagian hasil usaha atau bagi hasil",
q5: "Sewa-menyewa barang atau jasa dengan imbalan sewa yang disepakati",
q6: "Imbalan yang diberikan atas pinjaman uang dengan bunga tetap",
q7: "Akad murabaha",
q8: "Pembagian keuntungan antara bank dan nasabah sesuai dengan kontribusi modal atau usaha",
q9: "Perjudian atau spekulasi yang tidak jelas risiko dan hasilnya",
q10: "Pemilik modal yang menyediakan dana untuk usaha",
q11: "Kesepakatan awal yang mengacu pada kontribusi modal masing-masing pihak",
q12: "Penyewaan barang atau jasa dengan pembayaran sewa yang disepakati",
q13: "Akad murabaha",
q14: "Pada mudharabah, salah satu pihak hanya bertindak sebagai pemberi modal, sedangkan musyarakah melibatkan kontribusi modal dari kedua pihak",
q15: "Pembiayaan mudharabah",
q16: "Undang-Undang No. 21 Tahun 2008 tentang Perbankan Syariah",
q17: "Akad peminjaman uang dengan jaminan barang yang disimpan oleh pihak bank",
q18: "Transaksi harus bebas dari ketidakpastian yang dapat merugikan salah satu pihak",
q19: "Perbankan syariah tidak mengenakan bunga atas pembiayaan, sedangkan perbankan konvensional mengenakan bunga",
q20: "Pembiayaan murabaha",

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
