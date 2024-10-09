import { useCurrentLocationContext } from "../context/currentLocationContext";

import Chart from "./Chart";
import Spinner from "./ui/Spinner";
import { useWeather } from "../hooks/useWeather";

const Weather = () => {
  const { location } = useCurrentLocationContext();
  const { data, isLoading, isError } = useWeather(location);

  if (isError) {
    return (
      <div className="flex justify-center items-center relative h-[70vh] h-max-[70vh]">
        <p className="text-xl font-medium text-red-600">
          No data found for location
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center relative h-[70vh] h-max-[70vh]">
      {isLoading && <Spinner />}
      <Chart weatherData={data} />
    </div>
  );
};

export default Weather;
