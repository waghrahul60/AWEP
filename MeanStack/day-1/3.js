let abc1 = document.querySelector("#parentBlockContainer");

console.log(abc1);

/*
 * Evenr => load
 * Listner => call Back (Arrow or annonymous function)
 */

window.addEventListener("load", () => {
  console.log("I.am.called");
  const abc = document.querySelector("#parentBlockContainer");
  console.log(abc);

  for (let i = 0; i < 20; i++) {
    const newElement = abc.children[0].cloneNode(true);
    newElement.style.display = "flex";

    abc.insertBefore(newElement, abc.firstChild);
  }
});

/* Event Listner        onclick = " LikeMe() "


 Event => Click
 Listener => likeMe()

*/

let likeMe = function () {};
