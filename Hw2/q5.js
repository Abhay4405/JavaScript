function calculateTotal(discountRate = 0.10, ...prices) {
  console.log("Prices:", prices);
  console.log("Discount Rate:", discountRate);

  // Calculate total of all items
  let total = prices.reduce((sum, price) => sum + price, 0);

  // Apply discount
  let discountAmount = total * discountRate;
  let finalAmount = total - discountAmount;

  return finalAmount;
}

// Calling function with multiple product prices
let totalCost = calculateTotal(0.15, 499, 799, 299);

// Display final total
console.log("Final Amount to Pay: ₹" + totalCost);
