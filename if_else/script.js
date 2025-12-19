let name = prompt("Введите ваше имя:");
let age = Number(prompt("Введите ваш возраст:"));

document.body.innerHTML = `Привет, ${name}! Тебе ${age} лет.<br>`;

if (isNaN(age) || age < 0) {
    document.body.innerHTML += "Возраст введён некорректно.";
}else if (age < 6) {
    document.body.innerHTML += "Ты ребёнок.";
} else if (age < 14) {
    document.body.innerHTML += "Ты подросток.";
} else if (age < 18) {
    document.body.innerHTML += "Ты юноша/девушка.";
} else {
    document.body.innerHTML += "Ты взрослый.";
}