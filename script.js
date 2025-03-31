document.addEventListener("DOMContentLoaded", function () {
    // 生成未来7天的时间表
    const scheduleTable = document.querySelector("#schedule-table tbody");
    const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];

    function generateSchedule() {
        for (let i = 0; i < times.length; i++) {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${times[i]}</td>
                            <td class="roomA">可用</td>
                            <td class="roomB">可用</td>`;
            scheduleTable.appendChild(row);
        }
    }
    generateSchedule();

    // 预订表单处理
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("预订成功！我们将与您联系确认。");
            bookingForm.reset();
        });
    }
});
