import { useEffect, useState } from "react";
import { Country } from "country-state-city";
import { Option } from "../App";

const useCountries = () => {
  const [allCountries, setAllCountries] = useState<Option[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Option | null>(null);

  useEffect(() => {
    setAllCountries(
      Country.getAllCountries().map((country) => ({
        value: {
          name: country.name,
          latitude: country.latitude,
          longitude: country.longitude,
          isoCode: country.isoCode,
        },
        label: country.name,
      })),
    );
  }, []);

  const handleSelectedCountry = (option: Option | null) => {
    setSelectedCountry(option);
  };

  return { allCountries, selectedCountry, handleSelectedCountry };
};

export default useCountries;
