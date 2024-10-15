import React from "react";
import { Card, Metric, Text } from "@tremor/react";
import { WeatherDetailsDailyType } from "../hooks/useWeather";

type WeatherCardsProps = {
  dailyDetails: WeatherDetailsDailyType;
};

const WeatherCards: React.FC<WeatherCardsProps> = ({ dailyDetails }) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-10/12">
      <Card
        decoration="top"
        decorationColor="pink"
        className="!bg-gray-300 !text-center"
      >
        <Text className="!font-semibold !text-xl">Max Temperature</Text>
        <Metric className="!text-red-600 !font-bold">
          {dailyDetails.apparentTemperatureMax[0]} &#x2103;
        </Metric>
      </Card>
      <Card
        decoration="top"
        decorationColor="cyan"
        className="max-w-xs !bg-gray-300 !text-center"
      >
        <Text className="!font-semibold !text-xl">Min Temperature</Text>
        <Metric className="!text-blue-600 !font-bold">
          {dailyDetails.apparentTemperatureMin[0]} &#x2103;
        </Metric>
      </Card>
    </div>
  );
};

export default WeatherCards;
