async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '81f8bbb7628bbe21f7a54daf1cbd7b4f';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = `
        <p style="color:red;">City not found or error: ${data.message}</p>
      `;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `
      <p style="color:red;">Error fetching data. Check your internet connection or API key.</p>
    `;
    console.error(error);
  }
}
