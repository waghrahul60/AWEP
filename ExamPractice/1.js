let likecounter = 0;

function likeBtn() {
  let likehere = document.querySelector("#likebtn");
  likecounter++;
  likehere.innerHTML = "Like" + likecounter;
}

function readValue() {
  let userComment = document.querySelector("#inputComment").value;

  if (userComment != "") {
    let newElement = document.querySelector("#refComment").cloneNode(true);

    newElement.children[0].innerHTML = userComment;
    console.log(newElement);

    let commentBox = document.querySelector(".card-2");
    commentBox.insertBefore(newElement, commentBox.firstChild);

    document.querySelector("#inputComment").value = "";

    let errtext = document.querySelector(".error");
    errtext.style.visibility = "hidden";
  } else {
    //alert("Comment Caannot Be empty");

    let errtext = document.querySelector(".error");
    errtext.innerHTML = "Plz Enter The Comment";
    errtext.style.visibility = "visible";
  }
}

function delValue(delBtn) {
  let parent = delBtn.parentElement;
  parent.remove();
}
