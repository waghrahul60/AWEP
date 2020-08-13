function commentHere() {
  let commentNow = document.querySelector("#inputid").value;

  console.log(commentNow);

  if (x === "") {
    document.querySelector("#btn1").innerHTML = "please enter comment";
  } else {
    document.querySelector("#btn1").innerHTML = commentNow;
    document.querySelector("#inputid").value = " ";
  }
}
