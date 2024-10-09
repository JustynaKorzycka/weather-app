import { Context } from "vm";
import { ChartDataset } from "chart.js";
import backgroundPlugin from "./backgroundChartPlugin";
import radarLabelsPlugin from "./radarLabelsPlugin";
import blurDrawerPlugin from "./blurDrawerPlugin";
import pointsDrawerPlugin from "./pointsDrawerPlugin";

interface RadarContext extends Context {
  dataset: ChartDataset & { rLabels: string[] };
  label?: string;
}

export const DEFAULT_CHART_DATA = {
  labels: ["Wind Speed", "Temperature", "Humidity"],
  datasets: [
    {
      data: [] as number[],
      rLabels: [] as string[],
    },
  ],
};

export const OPTIONS = {
  responsive: true,
  layout: {
    padding: 5,
  },
  interaction: {
    mode: "nearest",
    intersect: false,
  },

  scales: {
    r: {
      angleLines: {
        color: "rgb(116, 116, 116)",
      },
      suggestedMin: 0,
      suggestedMax: 10,
      pointLabels: {
        color: "transparent",
      },
      ticks: {
        stepSize: 2,
        display: false,
      },
      grid: {
        lineWidth: 1,
        color: [
          "rgb(145, 144, 144)",
          "rgba(245, 245, 245, 0)",
          "rgb(59, 59, 59)",
          "rgb(119, 119, 119)",
          "rgb(177, 175, 175)",
        ],
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    backgroundPlugin,
    radarLabelsPlugin,
    blurDrawerPlugin,
    pointsDrawerPlugin,
    tooltip: {
      enabled: true,
      callbacks: {
        title: function (context: RadarContext[]) {
          return context[0].label;
        },
        label: function (context: RadarContext) {
          return context.dataset.rLabels[context.dataIndex];
        },
      },
    },
  },
};
