/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
    const subscribe = document.querySelector(".btn");

    subscribe.addEventListener("click", function(event) {
        event.preventDefault();

        const email = document.getElementById("email");
        const isvalidemail = email.value.trim(); 

        if (isvalidemail === "") {
            document.querySelector(".message").textContent = "Please enter a valid email address.";
        } else {
            document.querySelector(".message").textContent = `Thank you! Your email address ${enteredEmail} has been added to our mailing list!`;
        }
    });
    
});
