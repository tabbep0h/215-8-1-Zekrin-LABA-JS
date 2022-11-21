// Получаем кнопку //
const btn = document.getElementById('btn');

// Навешиванием на кнопку обработчик //
btn.addEventListener('click', setScroll);

// Устанавливаем таймер // 
const time = setTimeout(setScroll, 3000);


// Функция скролла по таймеру // 
function setScroll(){
    setTimeout(() => {
        window.scrollTo({
            top:500,
            behavior: "smooth"
        });
    }, 3000);
}