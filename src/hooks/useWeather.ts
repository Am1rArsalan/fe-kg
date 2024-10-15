import { useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { initialWeatherDetailsDaily, intiiialWeatherHourly } from "./constants";

// TODO: these types potentially could go to seprate files
// just decided leave them here for now

// FIXME: this type can be named better
// remove Details from it
export type WeatherDetailsDailyType = {
  apparentTemperatureMin: number[];
  apparentTemperatureMax: number[];
  sunrise: string[];
  sunset: string[];
};

export type WeatherHourlyType = {
  time: string[];
  temperature2m: number[];
  relativeHumidity2m: number[];
};

export type WeatherDetailsType = {
  getWeather: {
    daily: WeatherDetailsDailyType;
    hourly: WeatherHourlyType;
  };
};

export const GET_WEATHER_BY_COORDINATES_QUERY = gql`
  query GetWeatherByCoordinates($latitude: String!, $longitude: String!) {
    getWeather(latitude: $latitude, longitude: $longitude) {
      daily {
        apparentTemperatureMin
        apparentTemperatureMax
        sunrise
        sunset
      }
      hourly {
        time
        temperature2m
        relativeHumidity2m
      }
    }
  }
`;

const useWeather = () => {
  const [getWeather, { loading, error, data }] =
    useLazyQuery<WeatherDetailsType>(GET_WEATHER_BY_COORDINATES_QUERY);
  const [dailyData, setDailyData] = useState<WeatherDetailsDailyType>(
    initialWeatherDetailsDaily,
  );
  const [hourlyData, setHourlyData] = useState<WeatherHourlyType>(
    intiiialWeatherHourly,
  );

  const fetchWeatherByCoordinates = async (
    userInputLatitude: string,
    userInputLongitude: string,
  ) => {
    await getWeather({
      variables: {
        latitude: userInputLatitude,
        longitude: userInputLongitude,
      },
    });
  };

  useEffect(() => {
    if (data?.getWeather?.daily) {
      setDailyData(data?.getWeather?.daily);
    }

    if (data?.getWeather?.hourly) {
      setHourlyData(data.getWeather.hourly);
    }
  }, [data]);

  return {
    fetchWeatherByCoordinates,
    loading,
    error,
    dailyData,
    hourlyData,
  };
};

export default useWeather;
