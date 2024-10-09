import { Plugin, Chart } from "chart.js";

const pointsDrawerPlugin: Plugin = {
  id: "customPointsPlugin",
  afterDatasetsDraw: (chart: Chart<"radar">) => {
    const { ctx, scales } = chart;
    const scale = scales.r;

    const pointColor = "#dbd7d7";
    const pointRadius = 4;
    const pointBorderColor = "black";
    const pointBorderWidth = 1;

    // eslint-disable-next-line
    //@ts-ignore
    chart.data.labels.forEach((label, index) => {
      // eslint-disable-next-line
      //@ts-ignore
      const angle = scale.getPointPositionForValue(index, 10); //
      const x = angle.x;
      const y = angle.y;

      ctx.beginPath();
      ctx.arc(x, y, pointRadius, 0, 2 * Math.PI);
      ctx.fillStyle = pointColor;
      ctx.fill();
      ctx.lineWidth = pointBorderWidth;
      ctx.strokeStyle = pointBorderColor;
      ctx.stroke();
    });
  },
};

export default pointsDrawerPlugin;
