document.addEventListener('DOMContentLoaded', () => {

  const cityInput = document.getElementById('city-input');
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityNameDisplay = document.getElementById('city-name');
  const temperatureDisplay = document.getElementById('temperature');
  const descriptionDisplay = document.getElementById('description');
  const errorMessage = document.getElementById('error-message');

  const API_KEY = '594963ee8c75e2e5a74267789efe4d95';

  getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      console.error('Fetch failed:', error);
      showError(error);
    }
  });

  // allow Enter key to trigger search
  cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') getWeatherBtn.click();
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log('fetch response object:', response);

    if (!response.ok) {
  
      let errMsg = `HTTP ${response.status}`;
      try {
        const errData = await response.json();
        if (errData && errData.message) errMsg = errData.message;
        else errMsg = JSON.stringify(errData);
      } catch (e) {
        try {
          const txt = await response.text();
          if (txt) errMsg = txt;
        } catch (_) {}
      }
      console.error('API error:', errMsg);
      throw new Error(errMsg || 'City Not Found');
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log('weather data:', data);
    const { name, main, weather } = data || {};
    cityNameDisplay.textContent = name || '';
    temperatureDisplay.textContent = main && typeof main.temp === 'number' ? `Temperature: ${Math.round(main.temp)}°C` : '';
    descriptionDisplay.textContent = Array.isArray(weather) && weather[0] ? `Description: ${weather[0].description}` : '';

    // show results, hide error
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');
  }

  function showError(err) {
    // hide results, show error message
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
    errorMessage.textContent = err && err.message ? err.message : 'City not found. Please try again.';
  }

});


