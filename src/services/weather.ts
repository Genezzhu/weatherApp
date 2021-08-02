import request from '@/utils/request';
import {
	OPEN_WEATHER_BASE_URL,
	WEATHER_REQUEST_PATH_OPTION,
	OPEN_WEATHER_API_KEY,
} from '@/utils/constants';
import { ILocation } from '@/interfaces/weather';

export async function getCurrentLocationWeather(payload: ILocation) {
	const { latitude, longtitude } = payload;
	return request({
		method: 'GET',
		url: `${OPEN_WEATHER_BASE_URL}${WEATHER_REQUEST_PATH_OPTION.WEATHER}?lat=${latitude}&lon=${longtitude}&units=metric&appid=${OPEN_WEATHER_API_KEY}`,
	});
}
