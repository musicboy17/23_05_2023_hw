// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.


// ***
document.addEventListener('DOMContentLoaded', function(e){
    console.log('Все теги прогрузились');
})

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.


// ***
window.addEventListener('load', function(e){
    console.log('Страница загрузилась');
})


// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.


// ***
document.addEventListener('click', event => {
    const containSuperEl = event.target.classList.contains('super_element') ? 'присутствует' : 'отсутствует';
    const tagEl = event.target.tagName;
    console.log(`Класс "super_element" ${containSuperEl} в элементе "${tagEl.toLowerCase()}".`);
});





// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
// ***
document.addEventListener('mouseover', event => {
    const tagEl = event.target.tagName;
    if (tagEl.toLowerCase() == 'textarea') console.log(`Вы навели на textarea.`);
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

document.querySelector('ul')
addEventListener('click', event => {
    const tagEl1 = event.target.tagName.toLowerCase();
    if (tagEl1 == 'button') console.log(event.target.textContent);
});



// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами. 

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

// const liEls = document.querySelectorAll('li');
        // for (let i = 0; i < liEls.length; i++) {
        //     if (i % 2 !== 0) liEls[i].style.backgroundColor = 'red';
        // }

        const liEls = document.querySelectorAll('li');
        for (let i = 0; i < liEls.length; i++) {
            if (i % 2 !== 0) liEls[i].style.backgroundColor = 'red';
        }