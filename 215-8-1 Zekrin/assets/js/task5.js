// Навешиванием на кнопку обработчик //
btn.addEventListener("click", event1)
// Функция добавления нового li //
function event1(){
    let ol = document.getElementById("ol")
    let btn = document.getElementById("btn")
    let li = document.createElement('li')
    li.innerHTML = "пункт."
    ol.appendChild(li)
}

