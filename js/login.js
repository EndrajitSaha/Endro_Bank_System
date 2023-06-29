const deleteBtn = document.getElementById("btn-login");
const emailInput = document.getElementById("inputEmail3");
const passwordInput = document.getElementById("inputPassword3");

function checkInputs() {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "test123@gmail.com" && password === "1234") {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
}

emailInput.addEventListener("keyup", checkInputs);
passwordInput.addEventListener("keyup", checkInputs);

deleteBtn.addEventListener("click", function () {
  window.location.href = "bank.html";
});
