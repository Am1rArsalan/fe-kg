# Weather App Frontend 

## Overview

This frontend is a Client-Side Rendered (CSR) application developed using React, with the setup done through Vite. It visualizes weather data using Recharts and integrates with the backend GraphQL API to fetch and display weather information.

## Project Setup

### Prerequisites
- Node.js (v16+ recommended)
- Docker (for containerized deployment, optional)
- Ensure the backend is running (setup guide available [here](https://github.com/Am1rArsalan/be-kg)).

### Running the Frontend Locally

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone <your-frontend-repo-url>
   cd <frontend-project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The application will be available at [http://localhost:5173/](http://localhost:5173/).

### Project Structure

- **`src/`**: Contains the source code of the application.
  - **`assets/`**: Static assets like fonts and images.
  - **`components/`**: Reusable React components such as:
    - `AreaChartCard.tsx`, `LineChartCard.tsx`: For chart visualizations.
    - `CitySelector.tsx`, `CountrySelector.tsx`: To select location details.
    - `WeatherButton.tsx`, `WeatherCards.tsx`, `WeatherCharts.tsx`, `WeatherDetails.tsx`: Components to display weather information.
  - **`hooks/`**: Custom hooks for managing logic, including:
    - `useWeather.ts`: Fetches weather data using GraphQL.
    - `useCities.ts`, `useCountries.ts`: Fetches city and country data.
    - `useSync.ts`: implements **long polling** for real-time data updates. You can learn more about the long polling pattern by reviewing the `useSync` hook in the source code.
  - **`App.tsx`**: Main application component.
  - **`main.tsx`**: Entry point of the application.
  - **`App.css`**, **`index.css`**: CSS styles for the application.

### Real-Time Data

The application uses **long polling** for real-time updates on weather data. This is implemented in the `useSync` hook, which periodically queries the backend to fetch updated data. You can dive into the implementation by reviewing the source code for this hook.

### Data Visualization

- **Recharts**: Used for rendering weather data in charts, including line and area charts for visualizing trends.
- **Temor**: A wrapper around Recharts that simplifies working with charts.

### Styling

- **Tailwind CSS**: The application uses Tailwind CSS for styling. This is the first time Tailwind has been used by me in this project, keeping the UI simple and clean.

### GraphQL Integration

- **Apollo Client**: Apollo is used as the GraphQL client to query the backend and fetch weather data. Make sure the backend GraphQL API is running for proper data fetching.

## Deployment

To deploy the project using Docker, you can refer to the infrastructure setup available [here](https://github.com/Am1rArsalan/kg-infra). Docker configurations for both the frontend and backend services are provided there.
