/*
 * Evenr => load
 * Listner => call Back (Arrow or annonymous function)
 */

window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();

  const url = `https://reqres.in/api/users?page=2`;
  xhr.open("GET", url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const dataJ = JSON.parse(xhr.responseText);
      console.log(dataJ);

      abstractLogic(dataJ.data);
      abstractLogic(dataJ.data);
    }
  };

  xhr.send();
});

let abstractLogic = function (list) {
  console.log("I.am.called");
  const abc = document.querySelector("#parentBlockContainer");
  //console.log(abc);

  console.log(list);

  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    const newElement = abc.children[0].cloneNode(true);
    newElement.style.display = "flex";

    newElement.children[0].innerHTML =
      item.id + ` = ` + item.first_name + " " + item.last_name;

    abc.insertBefore(newElement, abc.firstChild);
  }
};
