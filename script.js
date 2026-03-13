//удвоение числа
function doubleNumber() {
    const inputElement = document.getElementById('numInput');
    const inputValue = inputElement.value;
    
    if (inputValue === '') {alert('Введите число..'); return;}
    
    const num = Number(inputValue);
    if (isNaN(num)) {alert('Ошибка! Введите корректное число!'); return;}
    
    //удваиваем число
    const doubledNum = num * 2;
 
    //инфа в консоли
    console.log('Введенное число:', num);
    console.log('Удвоенное число:', doubledNum);
}

//приветствие юзера
function greet() {
    const name = prompt('Здравствуйте, введите ваше имя..');
    
    if (name !== null && name.trim() !== '') {
        //приветствие
        alert(`Привет, ${name}! Добро пожаловать!`);
        //инфа в консоли
        console.log(`Пользователь: ${name}`);
    } else if (name !== null) {alert('Вы не ввели имя!');} //исключение
}

//мяу
function playMeow() {
    try {
        const meowSound = new Audio('sounds/meow.mp3');
        meowSound.play().catch(error => {
            console.log('no meow((:', error);
            alert('Не удалось воспроизвести звук. Проверьте наличие файла meow.mp3');
        }); console.log('😺 meow');
    } catch (error) {
        console.log('Ошибка!', error);
    }
}

//проверка на четность
function checkEven() {
    const inputElement = document.getElementById('numInput');
    const inputValue = inputElement.value;
    
    if (inputValue === '') {alert('Введите число..'); return;}
    
    const num = Number(inputValue);
    if (isNaN(num)) {alert('Ошибка! Введите корректное число!'); return;}
    
    //проверяем четность
    if (num % 2 === 0) {console.log('Число', num, '- ЧЕТНОЕ');} 
    else {console.log('Число', num, '- НЕЧЕТНОЕ');}
}

//создание и вывод списка чисел от 1 до 5
function createNumberList() {
    // Создаем пустой массив
    const numbers = [];
    
    // Цикл for от 1 до 5
    for (let i = 1; i <= 5; i++) {
        numbers.push(i); // добавляем число в массив
    }
    
    // Находим элемент ul на странице
    const listElement = document.getElementById('numberList');
    
    // Очищаем список перед добавлением новых элементов
    listElement.innerHTML = '';
    
    // Создаем элементы li для каждого числа
    for (let i = 0; i < numbers.length; i++) {
        const li = document.createElement('li'); // создаем li
        li.textContent = numbers[i]; // вставляем число
        listElement.appendChild(li); // добавляем li в ul
    }
    
    // Выводим массив в консоль для проверки
    console.log('Создан массив чисел:', numbers);
}

// Вызываем функцию сразу после загрузки страницы
window.onload = function() {
    createNumberList();
};