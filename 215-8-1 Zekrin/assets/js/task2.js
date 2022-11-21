// Получаем кнопку //
const btn = document.getElementById('btn');

// Навешиванием на кнопку обработчик //
btn.addEventListener('click', check);
 
// Функция проверки наличия скролла на странице //
function check(){
    if ((window.innerWidth - document.documentElement.clientWidth) > 0){ 
        alert('На сайте есть вертикальная прокрутка!');
    } else{
        alert('На сайте нет вертикальной прокрутки');
    }
}