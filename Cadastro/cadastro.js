document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".registerBx");
    const userNameInput = form.querySelector("input[placeholder='Nome do Usuário']");
    const emailInput = form.querySelector("input[placeholder='Email']");
    const passwordInput = form.querySelector("input[placeholder='Senha']");
    const confirmPasswordInput = form.querySelector("input[placeholder='Confirme a Senha']");
    
    function createMessage(input, message) {
        let messageDiv = input.nextElementSibling;
        if (!messageDiv || !messageDiv.classList.contains("message")) {
            messageDiv = document.createElement("div");
            messageDiv.classList.add("message");
            input.parentNode.insertBefore(messageDiv, input.nextSibling);
        }
        messageDiv.textContent = message;
        messageDiv.style.display = message ? "block" : "none";
    }

    function validateUserName() {
        const value = userNameInput.value.trim();
        const hasUppercase = /[A-Z]/.test(value);
        const noSpecialChars = /^[a-zA-Z\s]*$/.test(value);
        
        if (!hasUppercase) {
            createMessage(userNameInput, "O nome precisa ter pelo menos uma letra maiúscula.");
        } else if (!noSpecialChars) {
            createMessage(userNameInput, "O nome não pode ter caracteres especiais.");
        } else {
            createMessage(userNameInput, "");
        }
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|COM)$/;
        
        if (!validEmail.test(value)) {
            createMessage(emailInput, "O email deve ter um formato válido (exemplo@email.com).");
        } else {
            createMessage(emailInput, "");
        }
    }

    function validatePassword() {
        const value = passwordInput.value;
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        
        if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
            createMessage(passwordInput, "A senha deve ter uma letra maiúscula/minúscula, um número e um caractere especial.");
        } else {
            createMessage(passwordInput, "");
        }
    }

    function validateConfirmPassword() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;
        
        if (passwordValue !== confirmPasswordValue) {
            createMessage(confirmPasswordInput, "As senhas não coincidem.");
        } else {
            createMessage(confirmPasswordInput, "");
        }
    }

    userNameInput.addEventListener("input", validateUserName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
    confirmPasswordInput.addEventListener("input", validateConfirmPassword);
});
