const apiKey = "dbb799395b100ef170e2ab4133be155e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector(".input-box");
const searchButton = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }

  const data = await response.json();

  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temprature").innerText = `${Math.round(
    data.main.temp
  )} °C`;
  document.querySelector(
    ".humidity__value"
  ).innerText = `${data.main.humidity} %`;
  document.querySelector(".wind__value").innerText = `${data.wind.speed} km/h`;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Snow":
      weatherIcon.src = "images/snow.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
  }

  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display = "flex";
}

searchButton.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
