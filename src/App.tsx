import "./App.css";
import React from "react";
import CountrySelector from "./components/CountrySelector";
import CitySelector from "./components/CitySelector";
import WeatherButton from "./components/WeatherButton";
import WeatherDetails from "./components/WeatherDetails";
import DayNightInfo from "./components/DayAndNightInfo";
import WeatherCharts from "./components/WeatherCharts";
import WeatherCards from "./components/WeatherCards";
import useCountries from "./hooks/useCountries";
import useCities from "./hooks/useCities";
import useWeather from "./hooks/useWeather";

export type Option = {
  value: {
    name: string;
    latitude: string;
    longitude: string;
    isoCode?: string;
  };
  label: string;
};

const App = () => {
  const { allCountries, selectedCountry, handleSelectedCountry } =
    useCountries();
  const { cityOptions, selectedCity, handleSelectedCity } = useCities(
    selectedCountry?.value?.isoCode,
  );
  const { fetchWeatherByCoordinates, dailyData, hourlyData } = useWeather();

  const handleWeatherFetch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedCity) {
      await fetchWeatherByCoordinates(
        selectedCity.value.latitude,
        selectedCity.value.longitude,
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col space-y-4">
      <div className="flex flex-col bg-teal-800 p-4 space-y-4">
        <div className="flex flex-col space-y-4 items-center w-full">
          <CountrySelector
            allCountries={allCountries}
            selectedCountry={selectedCountry}
            onChange={handleSelectedCountry}
          />

          <CitySelector
            cities={cityOptions}
            selectedCity={selectedCity}
            onChange={handleSelectedCity}
          />

          <WeatherButton onClick={handleWeatherFetch} />
        </div>

        <WeatherDetails
          selectedCountry={selectedCountry}
          selectedCity={selectedCity}
        />
        <DayNightInfo data={dailyData} />
      </div>

      <div className="mt-5 w-full">
        <WeatherCharts hourlyData={hourlyData} />
      </div>

      <div className="w-full flex flex-col items-center mt-4">
        <WeatherCards dailyDetails={dailyData} />
      </div>
    </div>
  );
};

export default App;
