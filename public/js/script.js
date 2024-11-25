document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const cadastroBtn = document.getElementById("cadastro-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const userName = document.getElementById("user-name");
  

    function simulateLogin() {
      const user = "Usuário Exemplo"; 
      userName.textContent = user;
  
      loginBtn.style.display = "none";
      cadastroBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
    }
  
  
    function simulateLogout() {
      userName.textContent = ""; 
  
  
      loginBtn.style.display = "inline-block";
      cadastroBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
    }
  
   
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      simulateLogin();
    });
  
    logoutBtn.addEventListener("click", () => {
      simulateLogout();
    });
  });
  