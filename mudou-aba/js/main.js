// when the user loses focus
window.addEventListener("blur", () => {
    document.title = "Ei, volte aqui";
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
    document.title = "Bem-vindo!";
});
