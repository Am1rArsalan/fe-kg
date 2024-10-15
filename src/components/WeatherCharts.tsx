import React from "react";
import AreaChartCard from "../components/AreaChartCard";
import LineChartCard from "../components/LineChartCard";
import { WeatherHourlyType } from "../hooks/useWeather";

type WeatherChartsProps = {
  hourlyData: WeatherHourlyType;
};

const WeatherCharts: React.FC<WeatherChartsProps> = ({ hourlyData }) => {
  return (
    <>
      <AreaChartCard data={hourlyData} />
      <LineChartCard data={hourlyData} />
    </>
  );
};

export default WeatherCharts;
