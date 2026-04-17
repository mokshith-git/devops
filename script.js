async function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Enter city name");
        return;
    }

    // Temporary demo data (remove later when backend is ready)
    document.getElementById("result").innerHTML = `
        <h3>${city}</h3>
        <div class="temp">28°C</div>
        <p>☁ Cloudy</p>

        <div class="details">
            <span>💧 65%</span>
            <span>🌬 10 km/h</span>
        </div>
    `;
}