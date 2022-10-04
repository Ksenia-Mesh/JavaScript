const goods = [
    {
        id: 1,
        name: 'Рубашка',
        description: 'Легкая рубашка свободного покроя с длинными рукавами и отложным воротничком',
        sizes: [42, 44, 46, 48, 50, 52],
        price: 999,
        available: 'В наличии',
    },
    {
        id: 2,
        name: 'Юбка',
        description: 'Мини-юбка А-силуэта с плиссировкой спереди',
        sizes: [42, 44, 46],
        price: 1199,
        available: 'В наличии',
    },
    {
        id: 3,
        name: 'Платье',
        description: 'Длинное приталенное платье миди облегающего покроя из гладкой принтованной ткани',
        sizes: [44, 46 ,48, 52, 54],
        price: 2499,
        available: 'В наличии',
    },
    {
        id: 4,
        name: 'Куртка',
        description: 'Укороченная стеганая куртка на синтепоне без капюшона',
        sizes: [40, 42, 44, 50, 56],
        price: 3799,
        available: 'В наличии',
    },
    {
        id: 5,
        name: 'Джинсы',
        description: 'Джинсы свободного кроя с прямыми штанинами',
        sizes: [40, 42, 44, 46, 48, 50, 52],
        price: 2199,
        available: 'Нет в наличии',
    },
    {
        id: 6,
        name: 'Сумка',
        description: 'Плоская прямоугольная сумка-кроссбоди из гладкой искусственной экокожи',
        sizes: [24, 54],
        price: 1999,
        available: 'В наличии',
    }

];


const basket = [
    {
        goodId: 4,
        amount: 2,
    },
    {
        goodId: 1,
        amount: 3,
    },
    {
        goodId: 6,
        amount: 1,
    }
];

// get list()     возвращает массив доступных для продажи товаров в соответствии с установленным фильтром и сортировкой по полю Price
// add()          добавление товара в каталог
// remove(id)     удаление товара из каталога по его id


basket.addGoods = function (goodsId, amount) {
    this.push({goodsId:  goodsId,
        amount: amount});
    
}

basket.delGoods = function (goodsId) {
    basket.forEach(function(el, i) {
        if (el.goodsId == goodsId) basket.splice(i, 1);
      })
}

basket.clear = function () {
    while (this.length) {
        this.pop();
      }
}


function total() {
    let total = {totalAmount: 0,
                totalSumm: 0,}
    for (i of basket) {
        total.totalAmount += i.amount;
        for (j of goods) {
            if (j.id === i.goodsId) {
                total.totalSumm += j.price * i.amount;
            }
        }
    }
    return total
}
