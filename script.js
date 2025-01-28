const scheduleData = [
    { class: "Ujian Tesis - Afdal", date: "2025-01-30", time: "16:00 - 17:00", description: "Kelas 207 (Hybrid)" },
    { class: "Ujian Proposal Tesis - Nia", date: "2025-01-30", time: "10:30 - 12:30", description: "Introduction to mechanics and thermodynamics." },
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
