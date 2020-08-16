let likeKaro = function (btnElement) {
  let likeMeStr = btnElement.children[0].innerHTML;
  let likeMe = parseInt(likeMeStr);
  likeMe++;
  btnElement.children[0].innerHTML = likeMe;
};

let readValue = function (btnComment) {
  commentBox = btnComment.parentElement.parentElement.parentElement.children[3];
  const inputElement =
    btnComment.parentElement.parentElement.children[1].children[0];

  if (inputElement.value != "") {
    let newElement = commentBox.children[0].cloneNode(true);

    //input element

    newElement.children[0].innerHTML = inputElement.value;

    inputElement.value = "";

    commentBox.insertBefore(newElement, commentBox.firstChild);

    let errorText = document.querySelector("#error");
    errorText.style.visibility = "hidden";
  } else {
    let errorText = document.querySelector("#error");
    errorText.innerHTML = "Plz Enter The Comment";
    errorText.style.visibility = "visible";
  }
};

let deleteMe = function (btnDelete) {
  btnDelete.parentElement.parentElement.remove();
};
