function payNow() {
  try {
    let ok = Math.random() > 0.5;

    if (!ok) {
      throw new Error("Payment could not be completed.");
    }

    console.log("Payment Successful!");
  }
  catch (e) {
    console.log("Payment Failed:", e.message, e.name);
  }
}

payNow();
