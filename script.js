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