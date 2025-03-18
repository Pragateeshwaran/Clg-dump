const orderPizza = new Promise((resolve, reject) => {
    let pizzaReady = true;

    if (!pizzaReady) {
        resolve("Pizza is ready! 🍕");  // Success
    } else {
        reject("Sorry, no pizza today! 😢");  // Failure
    }
});
orderPizza
    .then((message) => {
        console.log("Success:", message); // Runs if `resolve()` is called
    })
    .catch((error) => {
        console.error("Error:", error);   // Runs if `reject()` is called
    });
