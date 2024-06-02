import { Controller, Get, Query, HttpCode } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('current')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get current weather information' })
  @ApiResponse({
    status: 200,
    description: 'Weather data retrieved successfully.',
  })
  @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  getCurrentWeather(@Query('city') city: string) {
    return this.weatherService.getCurrentWeather(city);
  }

  @Get('forecast')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get forecast weather information' })
  @ApiResponse({
    status: 200,
    description: 'Weather data retrieved successfully.',
  })
  @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  getForecastWeather(@Query('city') city: string, @Query('days') days: number) {
    return this.weatherService.getForecastWeather(city, days);
  }
}
