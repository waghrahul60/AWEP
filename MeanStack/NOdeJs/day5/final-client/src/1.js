let registerUser = () => {
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const email = document.querySelector("#email");
  const dob = document.querySelector("#dob");
  /*
  let url = "http://localhost:3000/adduser?";

  url += "username=" + username + "&";

  url += "password=" + password + "&";

  url += "email=" + email + "&";

  url += "dob=" + dob;
*/

  let url = `http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&dob{dob}`;
  console.log(url);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "");
  xhr.onload = () => {
    const res = xhr.responseText;
    console.log(res);
  };
};
