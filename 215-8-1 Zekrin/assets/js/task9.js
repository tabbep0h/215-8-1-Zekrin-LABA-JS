//Получение списка//
let ul = document.getElementById("ul");
// Добавление обработчкиа и функции //
ul.addEventListener("click", function func(event) {
	let li = event.target.closest("li");
//добавление "!" в конец li при нажатии на него
	if (li) {
		li.innerHTML +="!"; 
	}
}); 
// Получаем кнопку //
let btn = document.getElementById("button");
// Навешиванием на кнопку обработчик //
btn.addEventListener("click", function() {
//Добавление новых li //
    let add = document.createElement("li");
    add.innerHTML = "пункт";
    ul.appendChild(add);
});