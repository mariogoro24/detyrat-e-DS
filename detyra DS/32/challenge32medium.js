const ageInput = document.getElementById("age");
const ageError = document.getElementById("age-error");

function clearError(errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
}

function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = "inline";
}

function validateNumbers(input, errorElement) {
    const value = input.value;

    if (value === "") {
        clearError(errorElement);
        return;
    }

    if (!/^\d+$/.test(value)) {
        showError(errorElement, "Only numbers are allowed.");
        input.value = value.replace(/\D/g, "");
        return;
    }

    clearError(errorElement);
}

ageInput.addEventListener("input", function () {
    validateNumbers(ageInput, ageError);
});

clearError(ageError);