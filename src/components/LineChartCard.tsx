import { Card, LineChart, Title } from "@tremor/react";
import React, { useEffect, useState } from "react";
import { WeatherHourlyType } from "../hooks/useWeather";

type ChartData = {
  Time: number;
  Humidity: number;
};

type LineChartCardProps = {
  data: WeatherHourlyType;
};

const LineChartCard: React.FC<LineChartCardProps> = ({ data }) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const hourly = data.time.map((time) =>
      new Date(time)
        .toLocaleString("en-US", { hour: "numeric", hour12: false })
        .slice(0, 24),
    );

    setChartData(
      hourly?.map((hour, i) => ({
        Time: Number(hour),
        Humidity: data.relativeHumidity2m[i] ?? 0,
      })) ?? [],
    );
  }, [data]);

  return (
    <Card className="!bg-gray-100 mt-5">
      <Title className="!text-black">Humidity over time</Title>
      <LineChart
        data={chartData}
        index="Time"
        categories={["Humidity"]}
        colors={["yellow"]}
      />
    </Card>
  );
};

export default LineChartCard;
