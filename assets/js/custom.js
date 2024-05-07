$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});

$(function() {
	$(".btn-signup").click(function() {
  $(".nav").toggleClass("nav-up");
  $(".form-signup-left").toggleClass("form-signup-down");
  $(".success").toggleClass("success-left"); 
  $(".frame").toggleClass("frame-short");
	});
});

$(function() {
	$(".btn-signin").click(function() {
  $(".btn-animate").toggleClass("btn-animate-grow");
  $(".welcome").toggleClass("welcome-left");
  $(".cover-photo").toggleClass("cover-photo-down");
  $(".frame").toggleClass("frame-short");
  $(".profile-photo").toggleClass("profile-photo-down");
  $(".btn-goback").toggleClass("btn-goback-up");
  $(".forgot").toggleClass("forgot-fade");
	});
});

function validaRut(rut) {
  if (!/^(\d{1,2}\.?\d{3}\.?\d{3}-?[\dkK])$/.test(rut)) {
      alert("RUT incorrecto, ingréselo en el formato 11111111-1");
      return false;
  }
  // Realiza la validación del RUT aquí
  // ...
  return true;
}

function validateForm() {
  var fullname = document.getElementById("fullname").value.trim();
  var rut = document.getElementById("rut").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirmpassword = document.getElementById("confirmpassword").value.trim();

  // Validation logic
  if (fullname === "" || rut === "" || email === "" || password === "" || confirmpassword === "") {
      alert("Por favor, complete todos los campos.");
      return false;
  }

  if (password !== confirmpassword) {
      alert("Las contraseñas no coinciden.");
      return false;
  }

  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
  }

  // Additional validation logic for Rut can be added here if needed

  return true;
}