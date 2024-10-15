import React from "react";
import { Option } from "../App";

type WeatherDetailsProps = {
  selectedCountry: Option | null;
  selectedCity: Option | null;
};

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  selectedCountry,
  selectedCity,
}) => {
  return (
    <div className="flex flex-col text-center text-gray-200">
      <p className="text-lg font-semibold">
        {selectedCountry?.label} | {selectedCity?.label}
      </p>
      <p>
        Latitude: {selectedCity?.value?.latitude} | Longitude:{" "}
        {selectedCity?.value?.longitude}
      </p>
    </div>
  );
};

export default WeatherDetails;
