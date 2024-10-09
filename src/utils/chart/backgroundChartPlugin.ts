import { Chart, Plugin } from "chart.js";
const backgroundColors = [
  "rgb(248, 167, 46)",
  "rgba(238, 216, 182, 0.70)",
  "rgba(238, 216, 182, 0.45)",
  "rgba(151, 142, 142, 0.205)",
  "rgba(255,255,255,0)",
];

const backgroundPlugin: Plugin = {
  id: "backgroundColorPlugin",
  beforeDatasetsDraw: (chart: Chart<"radar">) => {
    const { ctx, scales } = chart;
    const radius = scales.r;

    const stepCount = radius.ticks.length - 1;
    // eslint-disable-next-line
    //@ts-ignore
    const stepSize = radius.drawingArea / stepCount;
    // eslint-disable-next-line
    //@ts-ignore
    const centerX = radius.xCenter;
    // eslint-disable-next-line
    //@ts-ignore
    const centerY = radius.yCenter;

    backgroundColors.forEach((color, index) => {
      const currentRadius = stepSize * (index + 1);
      const angleStep = (2 * Math.PI) / 3;
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + currentRadius * Math.cos(angle);
        const y = centerY + currentRadius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    });
  },
};

export default backgroundPlugin;
