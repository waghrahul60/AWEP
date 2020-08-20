window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();

  const url = `https://reqres.in/api/users?page=2`;
  xhr.open("GET", url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const dataJ = JSON.parse(xhr.responseText);
      console.log(dataJ);

      abstractLogic(dataJ.data);
      getWeather();
    }
  };

  xhr.send();
});

let abstractLogic = function (list) {
  const abc = document.querySelector("#parentBlockContainer");
  //console.log(abc);
  console.log(list);

  for (let i = 0; i < 4; i++) {
    let item = list[i];
    const newElement = abc.children[0].cloneNode(true);
    newElement.children[0].children[0].innerHTML = item.id;

    abc.insertBefore(newElement, abc.firstChild);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////
let getWeather = function () {
  let xhr = new XMLHttpRequest();

  document.querySelector("#textid").value;

  let cityName = document.querySelector("#textid").value || "mumbai";
  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=211f7254b6816ddd94adaa4f51cf5422&units=metric&q=";

  url = url + cityName;

  xhr.open("GET", url);

  xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    console.log(refjson);
    Display(refjson);
  };

  xhr.send();
};

let Display = (refjson) => {
  console.log(refjson);

  const name = refjson.name;
  const maxTemp = refjson.main.temp_max;
  const minTemp = refjson.main.temp_min;
  const pressure = refjson.main.pressure;
  const humidity = refjson.main.humidity;
  const temp = refjson.main.temp;
  const wetherCondition = refjson.weather[0].main;

  document.querySelector("#city").innerHTML = name;
  document.querySelector("#temp").innerHTML = minTemp;
  document.querySelector("#pressure").innerHTML = "Pressure : " + pressure;
  document.querySelector("#humidity").innerHTML = "humidity : " + humidity;
  document.querySelector("#temp1").innerHTML = "Temp : " + temp;
  document.querySelector("#wetherCondition").innerHTML = wetherCondition;
  document.querySelector("#textid").value = "";
};

function precipitation() {
  document.getElementById("preBtn").classList.remove("d-none", "d-md-block");
  document.getElementById("tempBtn").classList.add("d-none");
  document.getElementById("windBtn").classList.add("d-none");
}

function temp() {
  document.getElementById("preBtn").classList.add("d-none");
  document.getElementById("tempBtn").classList.remove("d-none");
  document.getElementById("windBtn").classList.add("d-none");
}

function wind() {
  document.getElementById("preBtn").classList.add("d-none");
  document.getElementById("tempBtn").classList.add("d-none");
  document.getElementById("windBtn").classList.remove("d-none");
}
