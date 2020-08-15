let likeKaro = function (btnElement) {
  let likeCountStr = btnElement.children[0].innerHTML;

  let likeCounter = parseInt(likeCountStr);

  likeCounter++;

  btnElement.children[0].innerHTML = likeCounter;
};

let readValue = function (userComment) {
  const commentBox =
    userComment.parentElement.parentElement.parentElement.children[2];
  let inputElement =
    userComment.parentElement.parentElement.children[1].children[0];

  let aabc = document.querySelector("#inputcomment").value;
  if (inputElement.value != "") {
    let newElement = commentBox.children[0].cloneNode(true);

    //Input Element

    newElement.children[0].innerHTML = inputElement.value;

    commentBox.insertBefore(newElement, commentBox.firstChild);
    inputElement.value = "";

    let errtext = document.querySelector(".error");
    errtext.style.visibility = "hidden";
  } else {
    // alert("sdkjfh");
    let errtext = document.querySelector(".error");
    errtext.innerHTML = "Plz Enter The Comment";
    errtext.style.visibility = "visible";
  }
};

let deleteValue = function (btnDelete) {
  btnDelete.parentElement.parentElement.remove();
};
