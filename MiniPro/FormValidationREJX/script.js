console.log("This is project 4");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

console.log(name, email, phone);
name.addEventListener("blur", () => {
  console.log("name is blured");
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
  let str = name.value;
  console.log(str, regex);
  if (regex.test(str)) {
    console.log("it match");
  } else {
    console.log("No Match");
  }
});

email.addEventListener("blur", () => {
  console.log("email is blured");
});

phone.addEventListener("blur", () => {
  console.log("phone is blured");
});
