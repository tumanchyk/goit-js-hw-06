// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterValue = document.querySelector('#value')
const btnDecr = document.querySelector('[data-action="decrement"]')
const btnIncr = document.querySelector('[data-action="increment"]')

counterValue.textContent= 0
let counter = 0

btnDecr.addEventListener('click', ()=>{
    counter -= 1
    counterValue.textContent = counter;
})

btnIncr.addEventListener('click', ()=>{
counter += 1
counterValue.textContent = counter
})

