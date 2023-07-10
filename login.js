document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("login");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("visible");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el usuario ya está registrado
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      // Verificar las credenciales del usuario
      if (existingUser.password === password) {
        alert("Inicio de sesión exitoso para el usuario " + username);
        window.location.href = "index.html";
      } else {
        alert("Contraseña incorrecta para el usuario " + username);
      }
    } else {
      alert("El usuario no está registrado");
      const newUser = {
        username: username,
        password: password
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Usuario registrado correctamente");
      form.reset();
  
    }
  });

  showPasswordCheckbox.addEventListener("change", function() {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});