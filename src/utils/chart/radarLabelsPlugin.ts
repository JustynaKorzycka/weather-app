import { Plugin, Chart } from "chart.js";

const radarLabelsPlugin: Plugin = {
  id: "radarLabels",
  beforeDraw(chart: Chart<"radar">) {
    const {
      ctx,
      data,
      scales: { r },
    } = chart;
    // eslint-disable-next-line
    //@ts-ignore
    const xCenter = r.xCenter;
    // eslint-disable-next-line
    //@ts-ignore
    const yCenter = r.yCenter;
    // eslint-disable-next-line
    //@ts-ignore
    const drawingArea = r.drawingArea;

    ctx.fillStyle = "#2d2d2d";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";

    const defaultParams = {
      ctx,
      xCenter,
      yCenter,
      xPos: 0,
    };

    drawLabel({
      ...defaultParams,
      angle: 0,
      label: data && data.labels && (data.labels[0] as unknown as string),
      yPos: -drawingArea - 15,
    });
    drawLabel({
      ...defaultParams,
      angle: -45,
      label: data && data.labels && (data.labels[1] as unknown as string),
      yPos: drawingArea + 15,
    });
    drawLabel({
      ...defaultParams,
      angle: 45,
      label: data && data.labels && (data.labels[2] as unknown as string),
      yPos: drawingArea + 15,
    });
  },
};

function drawLabel({
  ctx,
  xCenter,
  yCenter,
  angle,
  label,
  xPos,
  yPos,
}: {
  ctx: CanvasRenderingContext2D;
  xCenter: number;
  yCenter: number;
  angle: number;
  label?: string;
  xPos: number;
  yPos: number;
}) {
  ctx.save();
  ctx.translate(xCenter, yCenter);
  ctx.rotate(angle);
  ctx.fillText(label || "", xPos, yPos);
  ctx.restore();
}

export default radarLabelsPlugin;
