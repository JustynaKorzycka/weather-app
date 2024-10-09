import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API_URL,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_CITY_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_CITY_API_URL,
  },
});
