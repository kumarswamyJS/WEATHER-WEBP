import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("locationpermi.ejs");
});

app.get("/aboutme", (req, res) => {
  res.render("about.ejs");
});

app.get("/contactme", (req, res) => {
  res.render("contact.ejs");
});

app.get("/home", async (req, res) => {
  if (!data || !data.location) {
    return res.redirect("/"); // or show a fallback page
  }

  let time = data.location.localtime;

  res.render("index.ejs", {
    Ctemp: data.current.temp_c,
    Clocatin: data.location.name + " " + data.location.region,
    min: data.forecast.forecastday[0].day.mintemp_c,
    max: data.forecast.forecastday[0].day.maxtemp_c,
    windspeed: data.current.wind_kph,
    rainchance: data.forecast.forecastday[0].day.daily_chance_of_rain,
    humidity: data.current.humidity,
    uv: data.current.uv,
    sunrise: data.forecast.forecastday[0].astro.sunrise,
    sunset: data.forecast.forecastday[0].astro.sunset,
    moonrise: data.forecast.forecastday[0].astro.moonrise,
    moonset: data.forecast.forecastday[0].astro.moonset,
    sixday: data.forecast.forecastday,
    hour: time.slice(11, 13),
  });
});

let data = [];

app.post("/location", async (req, res) => {
  let lon = req.body.lon;
  let lat = req.body.lat;

  let dataAPI = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${lat},${lon}&days=8`
  );

  data = dataAPI.data;
  let time = data.location.localtime;

  res.render("index.ejs", {
    Ctemp: data.current.temp_c,
    Clocatin: data.location.name + " " + data.location.region,
    min: data.forecast.forecastday[0].day.mintemp_c,
    max: data.forecast.forecastday[0].day.maxtemp_c,
    windspeed: data.current.wind_kph,
    rainchance: data.forecast.forecastday[0].day.daily_chance_of_rain,
    humidity: data.current.humidity,
    uv: data.current.uv,
    sunrise: data.forecast.forecastday[0].astro.sunrise,
    sunset: data.forecast.forecastday[0].astro.sunset,
    moonrise: data.forecast.forecastday[0].astro.moonrise,
    moonset: data.forecast.forecastday[0].astro.moonset,
    sixday: data.forecast.forecastday,
    hour: time.slice(11, 13),
  });
});

app.post("/locationcity", async (req, res) => {
  let city = req.body.city;

  let dataAPI = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=8`
  );

  let citydata = dataAPI.data;
  let time = citydata.location.localtime;

  res.render("index.ejs", {
    Ctemp: citydata.current.temp_c,
    Clocatin: citydata.location.name + " " + citydata.location.region,
    min: citydata.forecast.forecastday[0].day.mintemp_c,
    max: citydata.forecast.forecastday[0].day.maxtemp_c,
    windspeed: citydata.current.wind_kph,
    rainchance: citydata.forecast.forecastday[0].day.daily_chance_of_rain,
    humidity: citydata.current.humidity,
    uv: citydata.current.uv,
    sunrise: citydata.forecast.forecastday[0].astro.sunrise,
    sunset: citydata.forecast.forecastday[0].astro.sunset,
    moonrise: citydata.forecast.forecastday[0].astro.moonrise,
    moonset: citydata.forecast.forecastday[0].astro.moonset,
    sixday: citydata.forecast.forecastday,
    hour: time.slice(11, 13),
  });
});

// POST /email
app.post("/email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PERSONAL_EMAIL,
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `New Message from ${name} — Weather Project`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error("❌ Mail Error:", error);
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${process.env.BASE_URL}`);
});
