import { useCurrentLocationContext } from "../context/currentLocationContext";

import Chart from "./Chart";
import Spinner from "./ui/Spinner";
import { useWeather } from "../hooks/useWeather";

const Weather = () => {
  const { location } = useCurrentLocationContext();

  const { data, isLoading, isError, isSuccess } = useWeather(location);

  return (
    <div className="flex justify-center  items-center relative h-[70vh] h-max-[70vh]">
      {location === "" && <p>Location not selected</p>}
      {isLoading && <Spinner />}
      {isSuccess && <Chart weatherData={data} />}
      {isError && (
        <p className="text-xl font-medium text-red-600">
          No data found for location
        </p>
      )}
    </div>
  );
};

export default Weather;
