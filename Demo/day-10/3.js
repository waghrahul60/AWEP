let likecounter = 0;
let likeMe = function (btnElement) {
  likecounter++;
  btnElement.innerHTML = "Like" + likecounter;
};
