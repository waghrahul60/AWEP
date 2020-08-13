let lcounter = 0;

function likes() {
  let likec = document.querySelector("#btn1");
  lcounter++;

  if (lcounter <= 0) {
  } else {
    document.querySelector("#btn1").innerHTML = "Like Number" + lcounter;
  }
}

function dislike() {
  lcounter--;

  if (lcounter <= 0) {
  } else {
    document.querySelector("#btn1").innerHTML = "Like Number (D)" + lcounter;
  }
}
