// 1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2
d = b++; console.log(d);           // 1
c = (2 + ++a); console.log(c);      // 5
d = (2 + b++); console.log(d);      // 4
console.log(a);                    // 3
console.log(b);                    // 3

//Почему код даёт именно такие результаты?

//ответ
// c = ++a; alert(c); префикс c =  (a=1) + 1
// d = b++; alert(d); постфикс d = (b = 1), "вторым" шагом b увеличивается на 1
// c = (2+ ++a); alert(c); с = 2 + (2 (ранее увеличенное) + 1)
// d = (2+ b++); alert(d); d = 2 + (2 (ранее увеличенное)), "вторым" шагом b увеличивается на 1

//2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);
console.log(x);

//Ответ
// 5 = 1 + (a = 2) * 2 (с присваиванием)

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

//    если a и b положительные, вывести их разность;
//    если а и b отрицательные, вывести их произведение;
//    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

// ответ:
'use strict';

let z = 37;
let y = 36;

if (((z > 0) && (y > 0))) {
    console.log(z - y);

} else if (((z < 0) && (y < 0))) {
    console.log(z * y);

} else {
    console.log(z + y);
}

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

// ответ:

//a4 = +prompt('Введите число от 1 до 15');
let a4 = 5;
switch (a4) {
    case 1:
        console.log('Ваше число 1');
        break;
    case 2:
        console.log('Ваше число 2');
        break;
    case 3:
        console.log('Ваше число 3');
        break;
    case 4:
        console.log('Ваше число 4');
        break;
    case 5:
        console.log('Ваше число 5');
        break;
    case 6:
        console.log('Ваше число 6');
        break;
    case 7:
        console.log('Ваше число 7');
        break;
    case 8:
        console.log('Ваше число 8');
        break;
    case 9:
        console.log('Ваше число 9');
        break;
    case 10:
        console.log('Ваше число 10');
        break;
    case 11:
        console.log('Ваше число 11');
        break;
    case 12:
        console.log('Ваше число 12');
        break;
    case 13:
        console.log('Ваше число 13');
        break;
    case 14:
        console.log('Ваше число 14');
        break;
    case 15:
        console.log('Ваше число 15');
        break;
}

//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

// ответ:
var a5 = 2;
var b5 = 3;

function plus(a5, b5) {
    return a5 + b5;
}

function minus(a5, b5) {
    return a5 - b5;
}

function div(a5, b5) {
    return a5 / b5;
}

function mult(a5, b5) {
    return a5 + b5;
}

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

// ответ:
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}

//7. *Сравнить null и 0. Попробуйте объяснить результат.

// ответ: 0 - цифра, а null - пустое значение