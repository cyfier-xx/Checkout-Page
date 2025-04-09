document.addEventListener("DOMContentLoaded", function () {
    const paymentButtons = document.querySelectorAll(".payment-options button");

    paymentButtons.forEach(button => {
        button.addEventListener("click", function () {
            paymentButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    document.querySelector(".complete-order").addEventListener("click", function () {
        alert("Your order has been completed!");
    });
});
