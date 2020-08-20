window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();

  const url = "https://xkcd.com/1/info.0.json";
  xhr.open("GET", url);

  xhr.onreadystatechange = () => {
    console.log(xhr.responseText);
  };

  xhr.send();
});
