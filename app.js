// Project 1: write your form validation in this file.

/* Element Capturing */
const form = document.getElementById("signup-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const frequencyInput = document.getElementById("frequency");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const frequencyError = document.getElementById("frequency-error");

const formMessage = document.getElementById("form-message");

/* Form Submission Section*/
form.addEventListener("submit", function(event) {

    // Prevent the browser from reloading
    event.preventDefault();

    // Get values without surrounding spaces
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const frequency = frequencyInput.value.trim();

    // Track whether the form is valid
    let isValid = true;
    let firstInvalidField = null;

    // Clear any previous success message
    formMessage.textContent = "";
    formMessage.classList.remove("success");

/* Name Validation */
    if (name === "") {
        nameError.textContent = "Enter your name.";
        nameInput.setAttribute("aria-invalid", "true");

        isValid = false;
        firstInvalidField = nameInput;
    } else {
        nameError.textContent = "";
        nameInput.removeAttribute("aria-invalid");
    }

/* Email Validation */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Enter your email address.";
        emailInput.setAttribute("aria-invalid", "true");

        isValid = false;

        if (firstInvalidField === null) {
            firstInvalidField = emailInput;
        }
    } else if (!emailPattern.test(email)) {
        emailError.textContent =
            "Enter an email address like name@example.com.";

        emailInput.setAttribute("aria-invalid", "true");
        isValid = false;

        if (firstInvalidField === null) {
            firstInvalidField = emailInput;
        }
    } else {
        emailError.textContent = "";
        emailInput.removeAttribute("aria-invalid");
    }

/* Frequency Validation */
    if (frequency === "") {
        frequencyError.textContent =
            "Choose how often we should email you.";

        frequencyInput.setAttribute("aria-invalid", "true");
        isValid = false;

        if (firstInvalidField === null) {
            firstInvalidField = frequencyInput;
        }
    } else {
        frequencyError.textContent = "";
        frequencyInput.removeAttribute("aria-invalid");
    }


/* Form Validation*/
    if (!isValid) {
        firstInvalidField.focus();
        return;
    }
    
/* Form Completion and Reset */
formMessage.textContent =
    `Thank you, ${name}! You're on the mailing list.`;

formMessage.classList.add("success");

form.reset();
});

