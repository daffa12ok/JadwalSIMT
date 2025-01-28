const scheduleData = [
    { class: "Ujian Tesis - I Nyoman Indra Darmawan", date: "2025-01-30", time: "18:30 - 19:30", description: "Kelas -" },
    { class: "Ujian Tesis - Muhammad Arif Abidin", date: "2025-01-30", time: "18:30 - 19:30", description: "Kelas -" },
    ];

function renderSchedule(data) {
    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = '';
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>${item.class}</h2>
            <p><strong>Date:</strong> ${item.date}</p>
            <p><strong>Time:</strong> ${item.time}</p>
            <p><strong>Description:</strong> ${item.description}</p>
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
