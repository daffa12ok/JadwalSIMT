const scheduleData = [
    {
        class: "Muhammad Arif Abidin (T)",
        date: "2025-01-30",
        time: "18:30 - 19:30",
        description: "Kelas -",
        examiners: ["P. Gunarta "; "P. Ruri "; "B. Reny "]
    },
    {
        class: "I Nyoman Indra Darmawan (T)",
        date: "2025-01-30",
        time: "18:30 - 19:30",
        description: "Kelas -",
        examiners: ["B. Erma "; "P. Mahendra "; "P. Faizal M "]
        
    },
    {
        class: "Muhammad Bagus Syaifullah (T)",
        date: "2025-01-30",
        time: "18:30 - 19:30",
        description: "Kelas -",
        examiners: ["P. Dinar "; "P. Jerry "; "P. Dhimas "]
        
    },
    {
        class: "Salakhudin Afif  (T)",
        date: "2025-01-30",
        time: "19:00 - 20:00",
        description: "Kelas -",
        examiners: ["B. Silvianita "; "B. Farida "; "P. Sumanta Buana "]
        
    },
    {
        class: "M Aldiansyah Nofa Pratama (T)",
        date: "2025-01-30",
        time: "19:30 - 20:30",
        description: "Kelas -",
        examiners: ["P. Gunarta "; "B. Reny "; "P. Ruri "]
        
    },
];

function renderSchedule(data) {
    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = '';
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>${item.class}</h2>
            <p><strong>Tanggal:</strong> ${item.date}</p>
            <p><strong>Waktu:</strong> ${item.time}</p>
            <p><strong>Kelas:</strong> ${item.description}</p>
            <p><strong>Penguji:</strong> ${item.examiners.join(', ')}</p>
            
        `;
        scheduleList.appendChild(listItem);
    });
}

function filterSchedule() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
    const dateValue = document.getElementById('dateFilter').value;
    const filteredData = scheduleData.filter(item => {
        const matchesClass = item.class.toLowerCase().includes(filterValue);
        const matchesDate = !dateValue || item.date === dateValue;
        return matchesClass && matchesDate;
    });
    renderSchedule(filteredData);
}

document.getElementById('filterInput').addEventListener('input', filterSchedule);
document.getElementById('dateFilter').addEventListener('input', filterSchedule);

// Initial render
document.addEventListener('DOMContentLoaded', () => renderSchedule(scheduleData));
