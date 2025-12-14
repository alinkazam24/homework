document.body.innerHTML += '<h2>=== Задача 1 ===</h2>';

let hours = 7;
let days = 21;
let salaryPerHour = 320;
let monthlyBudget = hours * days * salaryPerHour;
let lumpSum = monthlyBudget / 100 * 60;
let taxRate = 15;
let remainingAmount = monthlyBudget - lumpSum;
let tax = remainingAmount / 100 * taxRate;

document.body.innerHTML += `<h2>Ваш месячный бюджет составляет: ${monthlyBudget} Kc.</h2>`;
document.body.innerHTML += `<h2>Если вы получаете аванс в размере 60% от месячного бюджета, то он составит: ${lumpSum} Kc.</h2>`;
document.body.innerHTML += `<h2>Оставшаяся сумма после аванса: ${remainingAmount} Kc.</h2>`;
document.body.innerHTML += `<h2>Сумма налога с оставшейся суммы (15%): ${tax} Kc.</h2>`;
document.body.innerHTML += `<h2>Итоговая сумма после вычета налога: ${remainingAmount - tax} Kc.</h2>`;


// Задача 2://
document.body.innerHTML += '<h2>=== Задача 2 ===</h2>';

let day = prompt("Введите день");
let month = prompt("Введите месяц");
let year = prompt("Введите год");7

document.body.innerHTML += `<h2>Дата: ${day}.${month}.${year}</h2>`;

// Задача 3://
document.body.innerHTML += '<h2>=== Задача 3 ===</h2>';
let celsius = Number(prompt("Введите температуру в градусах Цельсия"));
let farenheit = (celsius * 1.8) + 32;
celsius = (5 * (farenheit - 32)) / 9;

document.body.innerHTML += `<h2>Температура в Фаренгейтах: ${farenheit} °F</h2>`;
document.body.innerHTML += `<h2>Температура в Цельсиях: ${celsius} °C</h2>`;