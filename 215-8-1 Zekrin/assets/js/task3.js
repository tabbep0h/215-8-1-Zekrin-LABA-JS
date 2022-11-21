// Получаем кнопку //
let btn = document.getElementById("button") 
// Получаем форму //
let form = document.getElementById("form") 
// Навешиванием на кнопку обработчик //
btn.addEventListener("click",sum);

// Функция считает value из input'ов //
function sum(){
    let sum = 0; 
for(let i=0; i<form.length; i++){
    sum = sum + Number(form[i].value) 
}
    let p = document.createElement("p")
    form.appendChild(p)
    p.innerHTML = sum
}
