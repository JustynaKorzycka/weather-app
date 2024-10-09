import { Location } from "../types/location";

export const loadOptions = (inputValue: string) => {
  return fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputValue}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_CITY_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_CITY_API_URL,
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map((location: Location) => {
          return {
            value: `${location.name},${location.countryCode}`,
            label: `${location.name}, ${location.countryCode}`,
          };
        }),
      };
    });
};
