let likeCounter = 0;

function likekero() {
  let likeKaro = document.querySelector("#like");
  likeCounter++;
  document.querySelector("#like").innerHTML = "Like" + likeCounter;
}

function readValue() {
  let userComment = document.querySelector("#UserComment").value;

  let newElement = document.querySelector("#refBox").cloneNode(true);
  newElement.children[0].innerHTML = userComment;

  console.log(newElement);

  let commentBox = document.querySelector("#refBox");

  commentBox.insertBefore(newElement, commentBox.firstChild);
}
