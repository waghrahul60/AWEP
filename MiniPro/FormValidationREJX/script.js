console.log("This is project 4");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let uservalid = false;
let emailvalid = false;
let phonevalid = false;

console.log(name, email, phone);
name.addEventListener("blur", () => {
  console.log("name is blured");
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = name.value;
  console.log(str, regex);
  if (regex.test(str)) {
    console.log("Your Name is valid");
    name.classList.remove("is-invalid");
  } else {
    console.log("Your name is not valid");
    name.classList.add("is-invalid");
  }
});

email.addEventListener("blur", () => {
  console.log("email is blured");
  let regex = /^([_\-\.a-zA-Z0-9]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(str, regex);
  if (regex.test(str)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
  } else {
    console.log("Your email is not valid");
    email.classList.add("is-invalid");
  }
});

phone.addEventListener("blur", () => {
  console.log("email is blured");
  let regex = /^[0-9]{10}$/;
  let str = phone.value;
  console.log(str, regex);
  if (regex.test(str)) {
    console.log("Your email is valid");
    phone.classList.remove("is-invalid");
  } else {
    console.log("Your email is not valid");
    phone.classList.add("is-invalid");
  }
});

let submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("You clicked on submit");

  if (uservalid && emailvalid && phonevalid) {
  }
  success = document.querySelector("#success");
  success.classList.add("show");
});
