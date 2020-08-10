var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
  let UserComment = document.querySelector("#inputid1").value; //we are not using innerHTML  becose its a form element
  // create new element dynamic comment layout
  const newElement = document
    .querySelector("#referenceCommentID")
    .cloneNode(true);
  newElement.style.visiblity = "visiul";

  newElement.removeAttribute("id");
  newElement.children[0].innerHTML = UserComment;

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
