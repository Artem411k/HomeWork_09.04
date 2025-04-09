// Задание 1: Найти остаток от деления двух переменных
let a = 13;
let b = 5;
let remainder = a % b;
console.log("Остаток от деления 13 на 5:", remainder); // Вывод: 3

// Задание 2: Что выведет на экран
let a; // Объявляем переменную а
alert(a); // Вывод: undefined

// Задание 3: Что выведет на экран
alert('abc' * 3); // Вывод: NaN (Not a Number)

// Задание 4: Что выведет на экран
alert(1 / 0); // Вывод: Infinity
alert(-1 / 0); // Вывод: -Infinity

// Задание 5: Что выведет на экран
alert('2' * '3'); // Вывод: 6








// Задание 1: Сознательно допустите ошибку в вашем коде
let x = 10;
let y = 5;
// Допустим ошибку: пропустим запятую перед присваиванием
let z = 15 // Ошибка: недостающая запятая в предыдущей строке
console.log(z); 
// В консоли вы увидите сообщение об ошибке, указывающее на строку с ошибкой.

// Задание 2: Вывод суммы переменных в консоль
let a = '2';
let b = '3';
let sum = a + b;
console.log("Сумма:", sum); // Вывод: "Сумма: 23" (конкатенация строк)

// Задание 3: Ввод чисел с клавиатуры и вывод результатов
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

console.log(`Сумма чисел равна ${num1 + num2}`);
console.log(`Разность чисел равна ${num1 - num2}`);
console.log(`Произведение чисел равно ${num1 * num2}`);
console.log(`Частное чисел равно ${num1 / num2}`);
console.log(`Остаток от деления чисел равен ${num1 % num2}`);
