const express = require("express");

const app = express();
const PORT = 3000;

const API_KEY = "bb9c6dbdcd8644fbbf145142263003";

app.use(express.static("public"));

// 🌤 Current Weather
app.get("/weather", async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.json({ error: { message: "City is required" } });
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.json({ error: { message: "Server error" } });
  }
});

// 📊 Forecast
app.get("/forecast", async (req, res) => {
  try {
    const { city } = req.query;

    const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&days=5`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.json({ error: { message: "Forecast error" } });
  }
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});