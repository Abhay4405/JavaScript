function updateCustomerProfile(customer) {
  try {
    console.log("Updating customer profile...");

    // Simulating possible failure
    let success = Math.random() > 0.5; // 50% chance fail

    if (!success) {
      throw new Error("Profile update failed due to a server error.");
    }

    console.log("Profile updated successfully for:", customer.name);
  } 
  catch (err) {
    console.log("ERROR:", err.message);
  } 
  finally {
    console.log("Operation complete. Closing database connection...");
  }
}

let customer = {
  name: "Abhay Dubey",
  email: "abhay@example.com"
};

updateCustomerProfile(customer);
