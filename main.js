const date = new Date();

function render() {
    date.setDate(1);

    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();


    const now = date.getDay();
    console.log(now);
    const firstDayIndex = (now == 0) ? 7 : now;
    console.log(firstDayIndex);


    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex;

    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML = date.toDateString();

    let days = '';


    for (let x = firstDayIndex - 1; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }

    }

    for (j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    render();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    render();
});

render();