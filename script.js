window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //timer

    let deadline = '2023-02-06';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // Получаем миллисекунды
            seconds = Math.floor((t/1000) % 60), // Получаем секнды.
            minutes = Math.floor((t/1000/60) % 60), // Получаем минуты.
            hours = Math.floor((t/(1000*60*60))); // Получаем часы.
            // hours = Math.floor((t/1000/60/60) % 24) // Получаем часы 24.
            // days = Math.floor((t/(1000*60*60*24))) // Получаем дни.

        return { // Выводим наши данные в объект.
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) { // id - id подительского блока, endtime - конечная дата, время.
        let timer = document.getElementById(id), // Получаем родительский блок.
            hours = timer.querySelector('.hours'), // Получаем блок с классом 'hours'.
            minutes = timer.querySelector('.minutes'), // Получаем блок с классом 'minutes'.
            seconds = timer.querySelector('.seconds'), // Получаем блок с классом 'seconds'.
            timeInterval = setInterval(updateClock, 1000); // Объявили нам интервал в переменную.
        
        function updateClock() { // Функция обновления таймера каждую секунду.
            let t = getTimeRemaining(endtime); // Запускаем функуию которую мы вызывали ранее.

            function addZero(num) { // Функция добавления к числу '0', что бы это смотрелось гармонично '00:00:00'.
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }
            hours.textContent = addZero(t.hours); // Добавляем данные в нашу верстку.
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) { // После того как таймер подойдет к концу, мы его останавливаем.
                clearInterval(timeInterval);
                hours.textContent = '00'; // Добавляем данные в нашу верстку.
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);
});