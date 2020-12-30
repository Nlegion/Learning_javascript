"use strict"
/* Каталог товаров*/
const goodsCatalogue = {
    allGoods: [
        {
            product: "Ручка",
            price: Number(5),
            quantity: Number(1)

        },
        {
            product: "Бумага",
            price: Number(50),
            quantity: Number(10)
        },
        {
            product: "Линейка",
            price: Number(500),
            quantity: Number(100)
        },
        {
            product: "Степлер",
            price: Number(5000),
            quantity: Number(1000)
        }
    ],
    /* Вывод каталога таблицей*/
    renderCatalogue() {
        let catalogDiv = document.getElementById('catalog')
        catalogDiv.insertAdjacentHTML('afterbegin', "<h2> Каталог товаров: </h2>")
        catalogDiv.insertAdjacentHTML('beforeend', '<table class="table"> <tbody id="tbody_cat" class="tbody_cat"></tbody></table>')
        let tbody_cat = document.getElementById("tbody_cat");
        for (let good in this.allGoods) {
            console.log(this.allGoods[good]);
            let tableRow = '<tr>'
            tableRow += "<td>" + this.allGoods[good].product + "</td>" + "<td> <b> Цена за единицу: </b> " + this.allGoods[good].price + " руб. </td>" + "<td> <b> Количество единиц в лоте: </b> " + this.allGoods[good].quantity + " шт. </td>" + "<td><button class = btn_add_good_to_cart data-good_id =" + this.allGoods[good].product + "> Добавить </button>" + "</tr>";
            tbody_cat.innerHTML += tableRow
        }
        this.addEventHandlers()
    },
    addEventHandlers() {
        document.querySelector(".tbody_cat").addEventListener('click', event => this.addToBasket(event));
    },
    addToBasket(event) {
        if (!event.target.classList.contains('btn_add_good_to_cart')) return;
        const good_id = event.target.dataset.good_id;
        goodsBasket.addToBasket(good_id);
    }
}

/* Корзина покупок*/
const goodsBasket = {
    goodsInBasket: [],

    /* Итоговая сумма*/
    getTotalPrice() {
        let total_cost = 0

        for (let n in this.goodsInBasket) {
            let good_cost = this.goodsInBasket[n].quantity * this.goodsInBasket[n].price
            total_cost += good_cost
        }
        return total_cost
    },
    /* Вывод корзины*/
    renderBasket() {
        let basketDiv = document.getElementById('basketSlot')
        basketDiv.innerHTML = ""
        if (this.goodsInBasket.length === 0) {
            basketDiv.insertAdjacentHTML('afterbegin', "<h2> Корзина товаров пуста</h2>")
        }

        else {


            basketDiv.insertAdjacentHTML('afterbegin', "<h2> Корзина товаров: </h2>")
            basketDiv.insertAdjacentHTML('beforeend', '<table class="table"> <tbody id="tbody"></tbody></table>')
            let tbody = document.getElementById("tbody");



            for (let good in this.goodsInBasket) {
                console.log(this.goodsInBasket[good]);
                let tableRow = '<tr>'
                tableRow += "<td>" + "<b>Товар: </b>" + this.goodsInBasket[good].product + "</td" + "<td> <b> Количество: </b> " + this.goodsInBasket[good].quantity + "<td> <b> Цена за единицу: </b> " + this.goodsInBasket[good].price + " руб. </td></tr>";

                tbody.innerHTML += tableRow
            }
            basketDiv.insertAdjacentHTML('beforeend', "<h2> <b> Итого: </b>   " + this.goodsInBasket.length + "  лот(а) на сумму  " + this.getTotalPrice() + " руб. </h2>")

        }
    },
    /* Добавление в корзину*/
    addToBasket(good_id) {
        let added_good = goodsCatalogue.allGoods.find(x => x.product === good_id);
        if (goodsBasket.goodsInBasket.find(x => x.product === good_id)) {
            goodsBasket.goodsInBasket.find(x => x.product === good_id).quantity += goodsCatalogue.allGoods.find(x => x.product === good_id).quantity
            this.renderBasket()
            return;
        }
        this.goodsInBasket.push({ ...added_good });
        this.renderBasket()
    }

}



/* Исходник (задание 4)

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
      },
  }
console.log(basket);   */
