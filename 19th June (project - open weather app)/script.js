let apiKey = "cb0bddc8d2c0ce9129695b829754c462";

document.getElementById("searchBtn").addEventListener("click", function () {
  let city = document.getElementById("cityInput").value.trim();
  let resultDiv = document.getElementById("weatherResult");

  if (city === "") {
    resultDiv.innerHTML = "<p style='color:red;'>Please enter a city name.</p>";
    return;
  }

  resultDiv.innerHTML = "Loading...";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(function (data) {
      let name = data.name;
      let temp = data.main.temp;
      let humidity = data.main.humidity;
      let wind = data.wind.speed;
      let icon = data.weather[0].icon;
      let description = data.weather[0].description;

      resultDiv.innerHTML =
        "<h2>" +
        name +
        "</h2>" +
        "<p><strong>Temperature:</strong> " +
        temp +
        " °C</p>" +
        "<p><strong>Condition:</strong> " +
        description +
        "</p>" +
        "<p><strong>Humidity:</strong> " +
        humidity +
        "%</p>" +
        "<p><strong>Wind Speed:</strong> " +
        wind +
        " m/s</p>" +
        "<img src='https://openweathermap.org/img/wn/" +
        icon +
        "@2x.png' alt='" +
        description +
        "'>";
    })
    .catch(function (error) {
      resultDiv.innerHTML = "<p style='color:red;'>" + error.message + "</p>";
    });
});
