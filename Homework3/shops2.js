class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable(available) {
        this.available = available;
    }
}

class GoodsList {
    #goods
    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    get list() {
        const forSaleList = this.#goods.filter(good => this.filter.test(good.name));
        
        if (this.sortPrice) {
            return forSaleList;
        }

        if (this.sortDir) {
            return forSaleList.sort((i, j) => (i.price - j.price));
        }
        return forSaleList.sort((i, j) => (j.price - i.price));
    }

    add(newGood) {
        this.#goods.push(newGood);
    }

    remove(id) {
        const getIndex = this.#goods.findIndex(good => good.id === id);
        if (getIndex != undefined) {
            this.#goods.splice(getIndex, 1);
        }
        return getIndex;
    }
}


class BasketGood extends Good {
    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
}

class Basket {
    constructor() {
        this.goods = []
    }
    
    get totalAmount() {
        return this.goods.map(item => item.amount).reduce((i, j) => i + j, 0)
    }

    get totalSum() {
        return this.goods.reduce((i, j) => i + j.amount * j.price, 0);
    }

    add(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            this.goods[index].amount += amount;
        } else {
            let addGood = new BasketGood(good.id, good.name, good.description, good.sizes, good.price, good.available, amount);
            this.goods.push(addGood);
        }
    }

    remove(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            if (this.goods[index].amount - amount <= 0 || amount === 0) {
                this.goods.splice(index, 1);
            } else {
                this.goods[index].amount -= amount;
            }
        } 
    }

    clear() {
        this.goods.length = 0;
    }

    removeUnavailable() {
        this.goods.filter(item => item.available === false).forEach(value => this.remove(value));
    }

}


a = new Good(1, 'Рубшка', 'белый', '42', '999', 'в наличии');
b = new Good(2, 'Юбка', 'черный', [42, 44, 46], '1199', 'в наличии');
c = new Good(3, 'Платье', 'черный', [44, 46 ,48, 52, 54], '2499', 'в наличии');
d = new Good(4, 'Куртка', 'красный', [40, 42, 44, 50, 56], '3799', 'в наличии');
e = new Good(5, 'Джинсы', 'синий', [40, 42, 44, 46, 48, 50, 52], '2199', 'нет в наличии');

const catalog = new GoodsList(/Платье/i, true, false);
catalog.add(c);
catalog.sortPrice = true;
catalog.sortDir = false;
catalog.remove(4);
const basket = new Basket();
basket.add(c, 3);
basket.remove(c, 2);
basket.removeUnavailable();
basket.clear();





console.log(`Товары из каталога: `, catalog.list);
console.log(`Отсортированные товары: `, catalog.list);
console.log(`Удаленные з каталога:`, catalog.list);
console.log(`Всего в корзине: ${basket.totalAmount}`);
console.log(`Итого(сумма) ${basket.totalAmount}: $${basket.totalSum}`);
console.log(basket.goods)