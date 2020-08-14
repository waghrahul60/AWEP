var likeCounter = 0;

function likepost() {
  let likebtn = document.querySelector("#like");
  likeCounter++;
  likebtn.innerHTML = "Like" + likeCounter;
}

function readValue() {
  let usercomment = document.querySelector("#user-comment-ip").value;

  if (usercomment != "") {
    let newElement = document.querySelector("#ref-comment").cloneNode(true);

    newElement.children[0].innerHTML = usercomment;

    console.log(newElement);

    let commentBox = document.querySelector("#comment-box");
    newElement.style.visibility = "visible";

    //commentBox.appendChild(newElement);
    commentBox.insertBefore(newElement, commentBox.firstChild);
    document.querySelector("#user-comment-ip").value = "";
  } else {
    alert("Comment Caannot Be empti");
  }
}

function delValue(delBtn) {
  let parent = delBtn.parentElement;
  parent.remove();
}
