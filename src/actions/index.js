import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.WEATHER_API_KEY}`;

export function fetchWeather(city) {
    const url = `${WEATHER_API_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}