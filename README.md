# Mausam Khabri — Weather Web App

A small, modern single-page web app that shows current weather for a city using the OpenWeatherMap API.

## Features

- Search current weather by city name
- Displays city name, temperature (°C) and a short description
- Simple, responsive UI with modern styling
- Shows friendly error messages for not-found or API errors

## Files

- `index.html` — markup for the app
- `style.css` — modern CSS styles and layout
- `script.js` — fetches weather data and updates the UI

## Quick start (view in browser)

You can open `index.html` directly in your browser (double-click). For a better local testing experience use a simple local server.


## API key

This app uses OpenWeatherMap. You need an API key:

1. Create an account at https://openweathermap.org/ and generate an API key.
2. Open `script.js` and replace the value of `API_KEY` with your key (for local testing only):

```js
const API_KEY = ''594963ee8c75e2e5a74267798efe4d95'';
```

Note: Do not commit secret keys to public repositories. For production, proxy requests or load the key from server-side environment variables.

## Usage

1. Start a local server (see Quick start).
2. Open the app in a browser.
3. Type a city name (e.g. `NEW DELHI`) and click **Get weather** or press Enter.
4. The app displays city name, temperature in °C and a short description. If an error occurs, a message will show.

## Troubleshooting

- If nothing displays, open DevTools (F12) and check the Console and Network tabs for errors.
- Common issues:
  - `401 Unauthorized`: API key invalid or not activated yet.
  - `404` / `city not found`: check spelling of city name.
  - `CORS` errors: try running via a local server (see Quick start).
  - Network errors: check internet connectivity.

If you see API error messages in the console, copy/paste them here and they can be diagnosed.

## Next improvements (suggested)

- Move API calls to a server-side endpoint to hide the key.
- Add a loading indicator and icons for weather conditions.
- Save recent searches to localStorage.
- Add unit tests and CI.

## License

MIT — feel free to reuse and modify.
