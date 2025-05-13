async function getDatos() {
     const [dataActual,dataFuura] = await Promise.all(
        [
            getDatosClimaActual(),
            getDatosClimaFuturo()
        ]
    );
    presentaDatosActuales(dataActual);
    presentaDatosFuturos(dataFuura);
    
}
async function getDatosClimaActual() {
    const lat = document.getElementById('latitude');
    const lon = document.getElementById('longitude');

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${lon.value}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m&timezone=auto`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al resolver la promesa");
        }
        const data = await response.json();
        return data.current;
    } catch (error) {
        throw error;
    }
}

async function getDatosClimaFuturo() {
    const lat = document.getElementById('latitude');
    const lon = document.getElementById('longitude');

    //  tiempo a futuro por 7 dias, proporcionados por la API 
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${lon.value}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al resolver la promesa");
        }
        const data = await response.json();
        return data.daily;
    } catch (error) {
        throw error;
    }

}
/*
función llamada formatDate, que convierte la fecha al idioma deseado, ya que originalmente 
está en formato anglosajón o en segundos desde 1970. Usaremos toLocaleDateString para 
obtener la fecha en español, ya sea de España, México o Argentina.
*/
function presentaDatosActuales(currentWheater){
    const weatherData = document.getElementById('weatherData');

    const temperatureElement = document.getElementById('temperature');
    const windspeedElement = document.getElementById('windspeed');
    const humedadElement = document.getElementById("humidity");
    const rainElement = document.getElementById("rain");

    weatherData.classList.remove('hidden');
    temperatureElement.textContent = `${currentWheater.temperature_2m} °C`;
    windspeedElement.textContent = `${currentWheater.wind_speed_10m} Km/h`;
    humedadElement.textContent = `${currentWheater.relative_humidity_2m} %`;
    rainElement.textContent = `${currentWheater.rain}mm`;    
}

function formatDate(dateString){
    const date = new Date(dateString);
    return date.toLocaleDateString('es-Es', {weekday: 'short',month:'short',day:'numeric'});
    
}
function presentaDatosFuturos(forecasWheatertData){
    const forecastData = document.getElementById('forecastData');       
    const forecastGrid = document.getElementById('forecastGrid')
    forecastGrid.innerHTML = '';

    for (let i = 0; i < forecasWheatertData.time.length; i++){
        const forecastItem = document.createElement('div');
        forecastItem.className = "forecast-item"
        
        forecastItem.innerHTML =`
            <div class="forecast-date">${formatDate(forecasWheatertData.time[i])}</div>
            <div class="forecast-temp">
            <span class="forecast-temp-max">${Math.round(forecasWheatertData.temperature_2m_max[i])}°</span>
            <span class="forecast-temp-min">${Math.round(forecasWheatertData.temperature_2m_min[i])}°</span>
            </div>
            <div class="forecast-precip">
            Lluvia: ${forecasWheatertData.precipitation_sum[i]} mm
            </div>       
        `;
        forecastGrid.appendChild(forecastItem);                  
        forecastData.classList.remove('hidden');
    }
}