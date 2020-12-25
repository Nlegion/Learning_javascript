// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
function GetNumber(GetNum) {
    let Num =
    {
        hundreds: Number(0),
        tens: Number(0),
        units: Number(0)
    };
    Num.hundreds = Math.floor(GetNum / 100);
    Num.tens = Math.floor((GetNum / 10) % 10);
    Num.units = GetNum % 10;
    return Num;
}

let GetNum = +prompt('Введите число от 0 до 999');
console.log(GetNumber(GetNum));

// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
//2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const basket = {
    goods: [
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
    ],
    addGood: function (good) {
        this.goods.push(good)
    },
    getPrice: function () {
        let funBasketPrice = 0;
        for (let prod of this.goods) {
            funBasketPrice += prod.price;
        }
        return funBasketPrice;
    }

}


console.log(basket);



