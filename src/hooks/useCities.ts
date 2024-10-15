import { useState } from "react";
import { City } from "country-state-city";
import { Option } from "../App";

const useCities = (selectedCountryIsoCode: string | undefined) => {
  const [selectedCity, setSelectedCity] = useState<Option | null>(null);
  const cities = City.getCitiesOfCountry(selectedCountryIsoCode || "") || [];

  const handleSelectedCity = (option: Option | null) => {
    setSelectedCity(option);
  };

  const cityOptions = cities.map((city) => ({
    value: {
      latitude: city.latitude || "",
      longitude: city.longitude || "",
      name: city.name,
    },
    label: city.name,
  }));

  return { cityOptions, selectedCity, handleSelectedCity };
};

export default useCities;
