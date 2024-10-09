const maxTemp = 40;
const minTemp = -10;

const maxHum = 100;
const minHum = 0;

const maxWind = 15;
const minWind = 0;

enum ValueType {
  TEMP,
  HUM,
  WIND,
}

export const scaleValue = (value: number, type: ValueType) => {
  switch (type) {
    case ValueType.TEMP:
      return ((value - minTemp) / (maxTemp - minTemp)) * 10;
    case ValueType.HUM:
      return ((value - minHum) / (maxHum - minHum)) * 10;
    case ValueType.WIND:
      return ((value - minWind) / (maxWind - minWind)) * 10;

    default:
      throw new Error("Not included");
  }
};

export const prepareScaleValues = (data: {
  windSpeed: number;
  temp: number;
  hum: number;
}) => {
  const scaleWindSpeed = scaleValue(data.windSpeed, ValueType.WIND);
  const scaleTemp = scaleValue(data.temp, ValueType.TEMP);
  const scaleHum = scaleValue(data.hum, ValueType.HUM);

  return [scaleWindSpeed, scaleTemp, scaleHum];
};
