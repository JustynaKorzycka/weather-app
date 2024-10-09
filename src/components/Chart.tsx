import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

import { Radar } from "react-chartjs-2";
import { prepareScaleValues } from "../utils/helpers/prepareScaleValuesHelper";
import { DEFAULT_CHART_DATA, OPTIONS } from "../utils/chart/const";
import backgroundPlugin from "../utils/chart/backgroundChartPlugin";
import radarLabelsPlugin from "../utils/chart/radarLabelsPlugin";
import blurDrawerPlugin from "../utils/chart/blurDrawerPlugin";
import pointsDrawerPlugin from "../utils/chart/pointsDrawerPlugin";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

type RadarChart = typeof DEFAULT_CHART_DATA;

const Chart = ({
  weatherData,
}: {
  weatherData: { windSpeed: number; temp: number; hum: number } | undefined;
}) => {
  const [chartData, setChartData] = useState<RadarChart>(DEFAULT_CHART_DATA);

  useEffect(() => {
    if (weatherData)
      setChartData((prev) => ({
        ...prev,
        datasets: [
          {
            data: prepareScaleValues(weatherData) || [],
            backgroundColor: "rgba(85, 44, 199, 0.7)",
            rLabels: [
              `${weatherData.windSpeed} m/s`,
              `${weatherData.temp} ℃`,
              `${weatherData.hum}%`,
            ],
            pointBackgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "rgba(0, 0, 0, 0)",
            pointHoverRadius: 0,
            pointRadius: 0,
          },
        ],
      }));
  }, [weatherData]);

  return (
    <div className="h-[100%] min-w-[500px] pt-4 2xl:min-w-[800px] flex justify-center  ">
      <Radar
        data={chartData}
        // eslint-disable-next-line
        //@ts-ignore
        options={OPTIONS}
        plugins={[
          backgroundPlugin,
          radarLabelsPlugin,
          blurDrawerPlugin,
          pointsDrawerPlugin,
        ]}
      />
    </div>
  );
};

export default Chart;
