import React from "react";
import { RiSunFill, RiMoonFill } from "@remixicon/react";
import moment from "moment/moment";
import { WeatherDetailsDailyType } from "../hooks/useWeather";

type DayNightInfoProps = {
  data: WeatherDetailsDailyType;
};

const DayNightInfo: React.FC<DayNightInfoProps> = ({ data }) => {
  return (
    <div className="flex justify-center space-x-8 text-gray-100 items-center">
      <p className="flex items-center">
        <RiSunFill className="text-yellow-300 mr-1" />
        {moment(new Date(data.sunrise[0] || "").getTime()).format("LT")}
      </p>

      <p className="flex items-center">
        <RiMoonFill className="text-indigo-300 mr-1" />
        {moment(new Date(data.sunset[0] || "").getTime()).format("LT")}
      </p>
    </div>
  );
};

export default DayNightInfo;
