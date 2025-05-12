async function getDatosClima(){    
    const lat = document.getElementById('latitude');
    const lon = document.getElementById('longitude');
    
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${lon.value}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m&timezone=auto`;

    const response = await fetch(url);
    if (!response.ok) {
        console.log("Error al resolver la promesa");
        return;
    }
    const data = await response.json();
    const weatherData = document.getElementById('weatherData');

    const temperatureElement = document.getElementById('temperature');
    const windspeedElement = document.getElementById('windspeed');
    const humedadElement = document.getElementById("humidity");
    const rainElement = document.getElementById("rain");

    weatherData.classList.remove('hidden');
    temperatureElement.textContent = `${data.current.temperature_2m} °C`;
    windspeedElement.textContent = `${data.current.wind_speed_10m} Km/h`;
    humedadElement.textContent = `${data.current.relative_humidity_2m} %`;
    rainElement.textContent = `${data.current.rain}mm`;
  
}