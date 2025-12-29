function fetchProductDetails(productId) {
    return new Promise((resolve, reject) => {
        
        console.log("Fetching product details from server...");

        setTimeout(() => {

            // Simulating success or failure
            let success = true; // try changing it to false

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

        }, 2000); // 2-second delay to simulate server response
    });
}

// Using the Promise
fetchProductDetails(101)
    .then(success => {
        console.log("Product Details:", success);
    })
    .catch(error => {
        console.log("Error:", error);
    });
