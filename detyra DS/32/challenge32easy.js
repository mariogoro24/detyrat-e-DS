function showError() {
    errorMessage.textContent = "Only letters are allowed.";
    errorMessage.style.display = "inline";
}

textInput.addEventListener("input", function () {
    const value = textInput.value;

    if (value === "") {
        clearError();
        return;
    }

    if (!/^[A-Za-z]+$/.test(value)) {
        showError();
        textInput.value = value.replace(/[^A-Za-z]/g, "");
        return;
    }

    clearError();
});

clearError();
