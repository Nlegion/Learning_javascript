// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let z = 1;
let x = 3;
let n = 100;
console.log(1);
console.log(2);

while (x < n) {
    for (let item = 2; item < x; item++) {
        if (!(x % item)) z = 0;
    }
    if (z) console.log(x);
    z = 1;
    x += 1;
}

//2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;

let basket = [
    {
        product: "Ручка",
        price: Number(50, 100)
    },
    {
        product: "Бумага",
        price: Number(50, 100)
    },
    {
        product: "Линейка",
        price: Number(50, 100)
    },
    {
        product: "Степлер",
        price: Number(50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice);

//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзин
function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket));
