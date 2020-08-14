let likeCounter = 1;

let likePost = function (btnElement) {
  //btnElement.innerHTML = "Like" + likeCounter;
  let postLikeCount = btnElement.children[0].innerHTML;
  let newlikecount = parseInt(postLikeCount);
  console.log(postLikeCount);
  newlikecount++;

  btnElement.children[0].innerHTML = newlikecount;
};
