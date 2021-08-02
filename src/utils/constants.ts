export const OPEN_WEATHER_BASE_URL = 'api.openweathermap.org/data/2.5/';

export const WEATHER_REQUEST_PATH_OPTION = {
	WEATHER: 'weather',
	FORECAST: 'forecast',
};

export const OPEN_WEATHER_API_KEY =
	process.env.OPEN_WEATHER_API_KEY || '54a39f3d2957566d9097443072eb5eb2';

export const TEMP_UNIT = {
	METRIC: 'metric',
	IMPERIAL: 'imperial'
};
