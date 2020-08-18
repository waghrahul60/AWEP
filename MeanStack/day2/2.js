let callAjax = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    console.log(refjson);
    jsonDomOperation(refjson);
  };

  xhr.send();
};

let callAjaxXML = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  // i m looking for xml :: Requesting to the server
  xhr.setRequestHeader("accept", "application/xml");

  xhr.onload = () => {
    const xmldoc = xhr.responseXML;
  };

  xhr.send();
};

let jsonDomOperation = function (refjson) {
  console.log(refjson);
  const abc = document.querySelector("#parent");

  const newElement = abc.children[0].cloneNode(true);
  newElement.children[0].innerHTML = newElement;
};
