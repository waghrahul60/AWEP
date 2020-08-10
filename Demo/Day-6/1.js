var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
  let UserComment = document.querySelector("#inputid1").value; //we are not using innerHTML  becose its a form element
  // create new element
  const newElement = document.createElement("div");
  //newElement.textContent = "User Comment ..." + commentCounter; //concatnate the counter

  newElement.textContent = UserComment;

  // add styling to new element
  newElement.style.background = "royalblue"; // values must be in double quotes or single quote
  newElement.style.color = "white";
  newElement.style.margin = "4px";

  // comment box elment
  const commentBox = document.querySelector("#commentBox");

  // append the new element to parent at the end
  // commentBox.appendChild(newElement);

  //add element at start
  commentBox.insertBefore(newElement, commentBox.firstChild);

  document.querySelector("#inputid1").value = "";
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}
