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
import { LABELS, OPTIONS } from "../utils/chart/const";
import backgroundPlugin from "../utils/chart/backgroundChartPlugin";
import radarLabelsPlugin from "../utils/chart/radarLabelsPlugin";
import blurDrawerPlugin from "../utils/chart/blurDrawerPlugin";
import pointsDrawerPlugin from "../utils/chart/pointsDrawerPlugin";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const Chart = ({
  weatherData,
}: {
  weatherData: { windSpeed: number; temp: number; hum: number };
}) => {
  const chartData = {
    labels: LABELS,
    datasets: [
      {
        data: prepareScaleValues(weatherData) || [],
        backgroundColor: "#37a3b6ab",
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
  };

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
