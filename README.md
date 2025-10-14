# Weather Dashboard

A modern, responsive weather application that provides real-time weather information, forecasts, and astronomical data. Built with a clean UI, dark/light mode support, and integrated contact functionality.

## Description

This Weather Dashboard is a web application designed to deliver accurate weather updates for any location. Users can search for cities, enable geolocation for automatic detection, view 6-day forecasts, and access sunrise/sunset times. It includes an "About Me" section for the developer and a contact form for user inquiries.

The app emphasizes user experience with a responsive design, theme switching (light/dark mode persistent across sessions), and accessibility features like keyboard navigation for search suggestions.

## Features

- **Real-time Weather Data**: Displays current temperature, conditions, min/max temps, wind speed, rain chance, humidity, and UV index.
- **6-Day Forecast**: Detailed forecast cards with icons, temperatures, rain probability, and descriptions.
- **Astronomy Info**: Sunrise, sunset, moonrise, and moonset times.
- **Geolocation Support**: Automatic location detection with permission handling.
- **City Search**: Autocomplete suggestions for Indian cities (expandable).
- **Theme Toggle**: Persistent light/dark mode using localStorage.
- **Contact Form**: Send emails via backend (integrated with Nodemailer or similar).
- **About Page**: Developer profile with education, skills, and bio.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Accessibility**: ARIA attributes, keyboard navigation, and semantic HTML.

## Demo

Live Demo: [Weather Dashboard](https://weather-uhj7.onrender.com) (Replace with actual deployment URL if available).

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies (assuming Node.js backend):

   ```
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add your Weather API key (from [weatherapi.com](https://www.weatherapi.com/)):
     ```
     WEATHER_API_KEY=your_api_key_here
     ```
   - For email functionality (if using Nodemailer):
     ```
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_app_password
     ```

4. Run the application:
   ```
   npm start
   ```
   The app will be available at `http://localhost:3000` (adjust port if necessary).

## Project Structure

```
weather-dashboard/
├── assets/                # Images, logos, favicon
│   ├── logo.png
│   ├── logo-dark.png
│   └── favicon.ico
├── partials/              # EJS partials
│   ├── header.ejs
│   ├── logo.ejs
│   └── footer.ejs
├── style/                 # CSS and JS files
│   ├── main.css
│   └── style.js
├── views/                 # EJS templates
│   ├── home.ejs           # Main weather page
│   ├── aboutme.ejs        # About page
│   ├── contactme.ejs      # Contact page
│   └── location.ejs       # Permission page
├── .env                   # Environment variables (git ignored)
├── app.js                 # Node.js server (assumed)
├── package.json           # Dependencies
└── README.md              # This file
```

## Technologies Used

- **Frontend**: HTML5, CSS3 (with CSS Variables), JavaScript (Vanilla JS)
- **Templating**: EJS
- **Backend**: Node.js, Express.js (assumed for routing and API handling)
- **API**: WeatherAPI.com for weather data
- **Libraries**: Font Awesome (icons), Google Fonts (Poppins)
- **Other**: LocalStorage for theme persistence, Fetch API for async requests

## API Integration

The app uses [WeatherAPI.com](https://www.weatherapi.com/) for fetching weather data. Sign up for a free API key and add it to your `.env` file.

## Contact

Developed by Kumarswamy JS.

- Email: kumarswamyjs@example.com
- GitHub: [yourusername](https://github.com/yourusername)
- LinkedIn: [kumarswamy-js](https://linkedin.com/in/kumarswamy-js)

Feel free to reach out via the contact form in the app!
