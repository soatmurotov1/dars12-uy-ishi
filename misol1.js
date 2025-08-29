


class Product {
    static productSoni =0;

    constructor(id, name, price){
        this.id = id;
        this.name =  name;
        this.price= price;
        Product.produnctSoni++
    }


    getTotal() {
        return this.price
    }


    getInfo() {
        return `id: ${this.id} nomi: ${this.name} narxi: ${this.price} som`
    }

    static getProductSoni() {
        return Product.produnctSoni
    }
}


class CareProduct extends Product {
    constructor(id, name, price, warrantyPeriod ) {
        super(id, name, price)
        this.warrantyPeriod = warrantyPeriod
    }

    calc() {
        const day = this.warrantyPeriod

        if(day == 5){
            return 0.1
        }else if(day == 4) {
            return 0.2
        }else if(day == 3) {
            return 0.3
        }else if(day == 2) {
            return 0.4
        }else if(day == 1){
            return 0.5
        }else{
            return 0
        }
    }

    getTotalPrice() {
        const chegirma = this.calc()
        const chegNarx = this.price * chegirma
        return this.price - chegNarx
        }


    }
const telefon = new Product(1, "Samsung", 12000)
const noutbook = new Product(2, "Hp", 13000)
const kitob = new Product(3, "Javascropt", 900)


console.log((noutbook.getInfo()));
console.log(telefon.getTotal());
console.log(kitob.getInfo())


