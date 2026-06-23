const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){
    event.preventDefault();

    message.textContent =
        "Thank you for your message!";

    form.reset();
});