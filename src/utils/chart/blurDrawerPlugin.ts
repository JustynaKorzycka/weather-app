import { Plugin, Chart } from "chart.js";

const blurDrawerPlugin: Plugin = {
  id: "blurDrawer",
  beforeDatasetsDraw: (chart: Chart<"radar">) => {
    const ctx = chart.ctx;
    const datasets = chart.data.datasets;
    datasets.forEach((dataset, index) => {
      const meta = chart.getDatasetMeta(index);

      if (!meta.hidden) {
        const scale = chart.scales.r;
        ctx.save();

        ctx.fillStyle = "rgb(100, 44, 255)";
        ctx.beginPath();

        meta.data.forEach((point, i) => {
          // eslint-disable-next-line
          //@ts-ignore
          const value = dataset.data[i] * 0.6;
          // eslint-disable-next-line
          //@ts-ignore
          const angle = scale.getPointPositionForValue(i, value);
          if (i === 0) {
            ctx.moveTo(angle.x, angle.y);
          } else {
            ctx.lineTo(angle.x, angle.y);
          }
        });

        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    });
  },
};

export default blurDrawerPlugin;
