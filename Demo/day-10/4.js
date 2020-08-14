let likeMe = function (btnElement) {
  let likeCountString = btnElement.children[0].innerHTML;

  let likeCount = parseInt(likeCountString);

  likeCount++;

  btnElement.children[0].innerHTML = likeCount;
};

let readAndAddComment = function (btnElementComment) {
  let userComment =
    btnElementComment.parentElement.parentElement.children[1].children[0].value;

  //  console.log(
  //   btnElementComment.parentElement.parentElement.parentElement.children[2]
  //     .children[0]
  // );

  /*console.log(
    btnElementComment.parentElement.parentElement.nextElementSibling.children[2]
      .children[0]
  );*/

  const commentBox =
    btnElementComment.parentElement.parentElement.parentElement.children[2];

  let newElement = commentBox.children[0].cloneNode(true);
  newElement.children[0].innerHTML = userComment;

  commentBox.insertBefore(newElement, commentBox.firstChild);

  commentBox.children[0].value = "";

  //readip
};
