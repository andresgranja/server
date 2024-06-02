import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherService {
  private currentWeatherUrl = 'http://api.weatherapi.com/v1/current.json';
  private forecastWeatherUrl = 'http://api.weatherapi.com/v1/forecast.json';
  private apiKey: string;

  constructor(
    private http: HttpService,
    private configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('WEATHER_API_KEY');
  }

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.currentWeatherUrl}?key=${this.apiKey}&q=${city}`;
    return this.http
      .get(url)
      .pipe(map((response: AxiosResponse) => response.data));
  }

  getForecastWeather(city: string, days: number): Observable<any> {
    const url = `${this.forecastWeatherUrl}?key=${this.apiKey}&q=${city}&days=${days}`;
    return this.http
      .get(url)
      .pipe(map((response: AxiosResponse) => response.data));
  }
}
