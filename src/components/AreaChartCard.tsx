import React, { useEffect, useState } from "react";
import { AreaChart, Card, Title } from "@tremor/react";
import { WeatherHourlyType } from "../hooks/useWeather";

type ChartData = {
  Time: number;
  "Temperature (C)": number;
};

type AreaChartCardProps = {
  data: WeatherHourlyType;
};

const AreaChartCard: React.FC<AreaChartCardProps> = ({ data }) => {
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
        "Temperature (C)": data.temperature2m?.[i] ?? 0,
      })) ?? [],
    );
  }, [data]);

  return (
    <Card className="!bg-gray-100">
      <Title className="!text-black">Temperature over time (C)</Title>
      <AreaChart
        data={chartData}
        index="Time"
        categories={["Temperature (C)"]}
        color="indigo"
      />
    </Card>
  );
};

export default AreaChartCard;
