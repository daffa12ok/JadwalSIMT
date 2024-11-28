document.getElementById("submitBtn").addEventListener("click", function() {
  const answers = {
q1: "Studi tentang ilmu yang berkaitan dengan pengolahan dan pemanfaatan informasi",  
q2: "Hardware, software, users",  
q3: "Mengotomatisasi proses pengambilan keputusan berdasarkan data",  
q4: "Perangkat lunak tidak akan berfungsi tanpa perangkat keras",  
q5: "Penulisan instruksi yang memungkinkan komputer melakukan tugas",  
q6: "Agar peserta didik dapat memahami cara berpikir algoritmik",  
q7: "Kemampuan untuk menyampaikan informasi secara efektif melalui media elektronik",  
q8: "Mengidentifikasi tujuan komunikasi dalam jaringan",  
q9: "Menyelesaikan masalah menggunakan intuisi manusia",  
q10: "Menyederhanakan masalah menjadi lebih mudah dipahami",  
q11: "Menemukan nilai terbesar dalam sekumpulan data",  
q12: "Diurutkan terlebih dahulu",  
q13: "Bubble Sort",  
q14: "Memilih elemen terkecil dan menukarnya dengan elemen pertama",  
q15: "Menggunakan pendekatan divide and conquer secara langsung",  
q16: "Proses input data dalam sistem komputer",  
q17: "Tumpukan mengikuti prinsip LIFO (Last In, First Out), sementara antrian mengikuti prinsip FIFO (First In, First Out)",  
q18: "Memungkinkan integrasi data antar aplikasi",  
q19: "Menyimpan dan mengakses data dari berbagai perangkat melalui internet",  
q20: "Memasukkan data dari aplikasi spreadsheet ke dalam dokumen pengolah kata secara langsung",
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
