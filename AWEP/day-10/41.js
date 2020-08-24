let likeMe = function (btnElement) {
  let likeCountString = btnElement.children[0].innerHTML;

  let likeCount = parseInt(likeCountString);

  likeCount++;

  btnElement.children[0].innerHTML = likeCount;
};

let commentHere = function (btnElementComment) {
  console.log(
    btnElementComment.parentElement.parentElement.children[1].children[0]
  );

  const commentBox =
    btnElementComment.parentElement.parentElement.parentElement.children[2];

  let newElement = commentBox.children[0].cloneNode(true);

  newElement.children[0].innerHTML = "test";

  commentBox.insertBefore(newElement, commentBox.firstChild);
};
