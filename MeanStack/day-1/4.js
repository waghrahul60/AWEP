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

  let postlist = [
    { id: 1, post: "Helloo World" },
    { id: 2, post: "Helloo Rahul" },
    { id: 3, post: "Helloo Patil saheb" },
    { id: 4, post: "Helloo Pawar Saheb" },
    { id: 5, post: "Helloo Thakre Saheb" },
    { id: 6, post: "Helloo AAkya saheb" },
    { id: 7, post: "Helloo sushant saheb" },
    { id: 8, post: "Helloo Sudya Saheb" },
    { id: 9, post: "Helloo Kubantu" },
    { id: 10, post: "Helloo BIDI Master" },
  ];

  for (let i = 0; i < 20; i++) {
    let item = postlist[i];
    const newElement = abc.children[0].cloneNode(true);
    newElement.style.display = "flex";

    newElement.children[0].innerHTML = item.post;

    abc.insertBefore(newElement, abc.firstChild);
  }
});
