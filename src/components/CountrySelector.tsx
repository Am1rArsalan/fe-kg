import React from "react";
import Select from "react-select";
import { Option } from "../App";

type CountrySelectorProps = {
  allCountries: Option[];
  selectedCountry: Option | null;
  onChange: (option: Option | null) => void;
};

const CountrySelector: React.FC<CountrySelectorProps> = ({
  allCountries,
  selectedCountry,
  onChange,
}) => {
  return (
    <Select
      className="w-64"
      options={allCountries}
      value={selectedCountry}
      onChange={onChange}
    />
  );
};

export default CountrySelector;
