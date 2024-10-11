import { Plugin, Chart } from "chart.js";

const blurDrawerPlugin: Plugin = {
  id: "blurDrawer",
  afterDatasetDraw: (chart: Chart<"radar">) => {
    const ctx = chart.ctx;
    const dataset = chart.data.datasets[0];

    const meta = chart.getDatasetMeta(0);
    //const scale = chart.scales.r;
    ctx.save();
    // eslint-disable-next-line
    //@ts-ignore
    ctx.fillStyle = dataset.backgroundColor;
    ctx.filter = "drop-shadow(-5px 5px 15px #0000006f)";
    ctx.beginPath();

    meta.data.forEach((point, index) => {
      const { x, y } = point.getProps(["x", "y"], true);
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
};

export default blurDrawerPlugin;
