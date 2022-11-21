// Получаем абзац //
let p = document.querySelectorAll("p")

for (var i = 0; i < p.length; i++) {
    // Навешиванием  обработчик //
	p[i].addEventListener('click', func);
}

// Возведение в квадрат  абзаца //
function func() {
	this.innerHTML = this.innerHTML * this.innerHTML;
}