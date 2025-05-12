async function getDatosClima() {
    const lat = document.getElementById('latitude');
    const lon = document.getElementById('longitude');

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${lon.value}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m&timezone=auto`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al resolver la promesa");
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

        await getDatosClimaFuturo();

    } catch (error) {
        console.log(error)
        alert(error);
    }
}

async function getDatosClimaFuturo() {
    const lat = document.getElementById('latitude');
    const lon = document.getElementById('longitude');

    //  tiempo a futuro por 7 dias, proporcionados por la API 
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${lon.value}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
    const forecastData = document.getElementById('forecastData');

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al resolver la promesa");
        }
        const data = await response.json();
        presentaDatosFuturos(data.daily);
        forecastData.classList.remove('hidden');



    } catch (error) {
        console.log(error);
    }

}
/*
función llamada formatDate, que convierte la fecha al idioma deseado, ya que originalmente 
está en formato anglosajón o en segundos desde 1970. Usaremos toLocaleDateString para 
obtener la fecha en español, ya sea de España, México o Argentina.
*/

function formatDate(dateString){
    const date = new Date(dateString);
    return date.toLocaleDateString('es-Es', {weekday: 'short',month:'short',day:'numeric'});
    
}
function presentaDatosFuturos(forecastData){
    const forecastGrid = document.getElementById('forecastGrid')
    forecastGrid.innerHTML = '';

    for (let i = 0;i<  forecastData.time.length; i++){
        const forecastItem = document.createElement('div');
        forecastItem.className = "forecast-item"
        forecastItem.innerHTML =`
            <div class="forecast-date">${formatDate(forecastData.time[i])}</div>
            <div class="forecast-temp">
            <span class="forecast-temp-max">${Math.round(forecastData.temperature_2m_max[i])}°</span>
            <span class="forecast-temp-min">${Math.round(forecastData.temperature_2m_min[i])}°</span>
            </div>
            <div class="forecast-precip">
            Lluvia: ${forecastData.precipitation_sum[i]} mm
            </div>       
        `;
        forecastGrid.appendChild(forecastItem);
        forecastGrid.classList.remove('hidden');        
    }
}