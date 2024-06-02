
# Weather API Backend

## Overview
This is the backend service for the Weather Application, built with NestJS. It provides weather data via API endpoints.

## Installation
Follow these steps to set up the project locally:

1. Clone the repository:
   ```
   git clone https://github.com/andresgranja/WeatherApp.git
   cd server
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm run start:dev
   ```

4. The server will run on:
   ```
   http://localhost:3000
   ```

## API Endpoints
- **GET /weather/current?city={cityName}**
  Returns current weather data for the specified city.

- **GET /weather/forecast?city={cityName}&days={numberOfDays}**
  Returns weather forecast data for the specified number of days.

## API Documentation
   ```
   http://localhost:3000/api
   ```
 
## CORS Configuration
CORS is enabled for all origins, allowing the frontend to make requests to the backend.

## Technologies
- NestJS
- Node.js
- Axios for API requests
