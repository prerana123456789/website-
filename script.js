function getWeather() {
  let city = document.getElementById("city").value;

  let apiKey = "16258bc32986ed94199e0dfe5a470a28";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerHTML =
        "Temperature: " + data.main.temp + " °C";
    })
    .catch(error => {
      document.getElementById("result").innerHTML = "City not found";
    });
}ss