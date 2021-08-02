export interface ILocation {
	latitude: number;
	longtitude: number;
}

export interface IWeatherBase {
	cityName: string;
	temp: number;
	wind: {
		deg: number;
		speed: number;
	}
	icon: string;
	main: string;
}

interface IWeatherUserInput {
	title: string;
	temp: string;
	wind: Boolean;
}

export interface WeatherModelState {
	currentWeather: IWeatherBase;
}
