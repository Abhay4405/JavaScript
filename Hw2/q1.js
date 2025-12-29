const products = ["laptop", "mobile", "watch", "headphone"];

const [f1,f2,f3,f4] = products;

console.log(f1);
console.log(f2);

const productDetails = {
  name: "laptop",
  price: 50000,
  brand: "dell",
  category: "electronics"
};

const {name, price, brand, category} = productDetails;

console.log(name);
console.log(price);
console.log(brand);
console.log(category);