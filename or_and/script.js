let yes = prompt("Введите yes или да:");

if (yes === "да" || yes === "yes") {
    document.body.innerHTML = "true";
}else {
    document.body.innerHTML = "я сказала да или yes!";
}