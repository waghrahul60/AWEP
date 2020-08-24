var likeCounter = 1;

function commentHere() {
  let userComment = document.querySelector("#inputId1").value; // we are not using innerHTML wy bcz this is a form element

  //  we are not goint to use createElement
  const newElement = document
    .querySelector("#referenceCommentId")
    .cloneNode(true);
  newElement.removeAttribute("id"); //good practice to keep unique id.
  newElement.style.visibility = "visible";
  newElement.children[0].innerHTML = userComment;

  // comment box elment
  const commentBox = document.querySelector("#commentBox");

  // now we want to add the element at the top.
  // commentBox.appendChild(newElement);
  commentBox.insertBefore(newElement, commentBox.firstChild);

  // clean the input box
  document.querySelector("#inputId1").value = "";
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}

function deleteComment(btnElement) {
  btnElement.parentElement.remove();
}
