function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

const generateButton = document.getElementById("generate-button");
const passwordContainer = document.getElementById("password-container");

generateButton.addEventListener("click", function() {
    const password = generatePassword(12); 
    passwordContainer.textContent = "Generated Password: " + password;
});



