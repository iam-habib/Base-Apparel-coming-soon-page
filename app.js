const error = document.querySelector(".error");
const text = document.querySelector(".error_text");
const button = document.querySelector(".btn");
let email;
let form = document.querySelector("form");

button.addEventListener("click", emailCheck);

function emailCheck() {
  email = document.getElementById("email").value;
  let mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(mailformat)) {
    error.classList.add("hide");
    text.classList.add("hide");
    form.submit();
  } else {
    error.classList.remove("hide");
    text.classList.remove("hide");
  }
}
