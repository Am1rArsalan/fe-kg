import React from "react";

type WeatherButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const WeatherButton: React.FC<WeatherButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 py-2 px-4 rounded-lg text-white text-sm font-bold hover:scale-105 transition-all duration-200 ease-in-out"
    >
      Get Weather
    </button>
  );
};

export default WeatherButton;
