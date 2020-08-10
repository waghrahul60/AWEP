var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
  let UserComment = document.querySelector("#inputid1").value; //we are not using innerHTML  becose its a form element
  // create new element dynamic comment layout
  const newElement = document.createElement("div");
  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-between";
  newElement.style.marginBottom = "8px";

  const child1 = document.createElement("div");
  child1.textContent = UserComment;

  const child2 = document.createElement("button");
  child2.textContent = "Delete";

  newElement.appendChild(child1);
  newElement.appendChild(child2);

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
