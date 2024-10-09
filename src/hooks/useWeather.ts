import { useQuery } from "@tanstack/react-query";

import { WeatherData } from "../types/weather";
import axios from "axios";

export const getWeather = (location: string) => {
  return axios
    .get<WeatherData>(`${import.meta.env.VITE_WEATHER_API_URL}`, {
      params: {
        q: location,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      },
    })
    .then((res) => {
      return {
        windSpeed: res.data.wind.speed,
        temp: res.data.main.temp,
        hum: res.data.main.humidity,
      };
    });
};

export const useWeather = (location: string) => {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: () => getWeather(location),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    enabled: !!location,
  });
};
