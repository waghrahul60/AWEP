function commentHere() {
  let commentNow = document.querySelector("#inputid").value;

  console.log(commentNow);

  document.querySelector("#btn1").innerHTML = "please enter comment";

  document.querySelector("#btn1").innerHTML = commentNow;
  // document.querySelector("#inputid").value = "";
}
