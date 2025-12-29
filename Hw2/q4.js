function fetchProductDetails(productId) {
    return new Promise((resolve, reject) => {
        
        console.log("Fetching product details from server...");

        setTimeout(() => {

            let success = true; // try false

            if (success) {
                resolve({
                    id: productId,
                    name: "Wireless Headphones",
                    price: 1999,
                    availability: "In Stock"
                });
            } else {
                reject("Unable to fetch product details. Server error!");
            }

        }, 2000);
    });
}

// Using async–await
async function showProduct() {
    try {
        const product = await fetchProductDetails(101);
        console.log("Product Details:", product);
    } 
    catch (error) {
        console.log("Error:", error);
    }
}

showProduct();
