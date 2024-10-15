import React from "react";
import Select from "react-select";
import { Option } from "../App";

type CitySelectorProps = {
  cities: Option[];
  selectedCity: Option | null;
  onChange: (option: Option | null) => void;
};

const CitySelector: React.FC<CitySelectorProps> = ({
  cities,
  selectedCity,
  onChange,
}) => {
  return (
    <Select
      className="w-64"
      options={cities}
      value={selectedCity}
      onChange={onChange}
    />
  );
};

export default CitySelector;
