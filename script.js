document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with a valid API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=' + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

function displayWeather(data) {
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    location.textContent = data.name + ', ' + data.sys.country;
    temperature.textContent = convertKelvinToCelsius(data.main.temp) + '°C';
    description.textContent = data.weather[0].description;
}

function convertKelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
}
