let likeMe = function (btnElement) {
  let likeCountString = btnElement.children[0].innerHTML;

  let likeCount = parseInt(likeCountString);

  likeCount++;

  btnElement.children[0].innerHTML = likeCount;
};
