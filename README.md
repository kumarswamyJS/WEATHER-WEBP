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
