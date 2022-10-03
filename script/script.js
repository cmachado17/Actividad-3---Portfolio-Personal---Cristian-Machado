function saludar() {
  event.preventDefault();
  let nombre;
  let email;
  let flag = false;
  let error = "";

  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;

  if (nombre == "") {
    error += "Revisar campo nombre. \n";
    document.getElementById("nombre").style.border = "1px solid red";
    flag = true;
  }

  if (email == "" || (email.indexOf('@') == -1)) {
    error += "Revisar campo email.";
    document.getElementById("email").style.border = "1px solid red";
    flag = true;
  }

  if (flag) {
    alert(error);
    return;
  }

  alert(
    "Gracias por tu mensaje " +
      nombre +
      " te respondere a la brevedad a tu casilla: " +
      email +
      "."
  );

  document.getElementById("nombre").value = "";
  document.getElementById("nombre").style.border = "1px solid black";
  document.getElementById("email").value = "";
  document.getElementById("email").style.border = "1px solid black";
  document.getElementById("mensaje").value = "";
}
