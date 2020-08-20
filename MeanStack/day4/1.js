let CallAjaxUsingJquer = () => {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=";

  $.ajax(url).done((data) => {
    console.log(data);
  });
};
