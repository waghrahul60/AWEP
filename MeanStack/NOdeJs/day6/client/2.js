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
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,10}$/; // /^[a-zA-Z]([])   $/
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

  // /^([a-zA_Z0-9\.@_]+)@([a-zA_Z0-9\.-_]{2,20}).([a-z]{2,3})(\.[a-z]{2,10})$/;

  //   kunal_OP.123@gmail.com

  //    /^ ([_\-\.a-zA-Z0-9]) @ () . ()   $/

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

let registerUser = () => {
  const username = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#phone").value;

  let url = `http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    const res = xhr.responseText;
    console.log(res);

    document.querySelector("#name").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
  };

  xhr.send();
};

/*
let registerUserVer1 = async () => {
  const username = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#phone").value;
};
*/
