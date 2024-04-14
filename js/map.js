document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactform");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form fields
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Simulate form submission (replace this with your actual form submission logic)
        // For demonstration, we'll just display a confirmation message
        var confirmationMessage = "Thank you, " + name + "! Your message has been sent successfully.";
        alert(confirmationMessage);

        // Clear form fields after submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        document.getElementById("message").value = "";
    });
});
