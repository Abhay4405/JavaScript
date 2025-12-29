class product {
    constructor(name, price, brand, category) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.category = category;
    }
    display() {
        console.log(this.name, this.price, this.brand, this.category);
    }
}

const product1 = new product("laptop", 50000, "dell", "electronics");
product1.display();