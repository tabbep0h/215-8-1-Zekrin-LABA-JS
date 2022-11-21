// Получаем ссылку //
let elem = document.getElementsByTagName('a');
for (let i = 0; i < elem.length; i++) {
    // Добавление обработчика при наведении //
	elem[i].addEventListener('mouseover', show);
}

// Функция добавления ссылки при наведении // 

function show() {
	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
}

