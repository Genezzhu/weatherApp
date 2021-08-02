import { getCurrentLocationWeather } from '@/services/weather';
import { getLocation } from '@/utils/utils';
import { IWeatherBase } from '@/interfaces/weather';

const weather = {
	namespace: 'weather',

	state: {
		currentWeather: null
	},

	effects: {
		*getGeoLocation(_payload, { call }) {
			try {
				const response = yield call(getLocation);
				return new Promise((resolve) => resolve(response));
			} catch (err) {
				return new Promise((reject) => reject(err));
			}
		},
		*fetchCurrentLocationWeather({ payload }, { call, put }) {
			const response = yield call(getCurrentLocationWeather, payload);
			const responsePayload: IWeatherBase = {
				cityName: response?.data?.name,
				temp: response?.data?.main?.temp,
				wind: response?.data?.wind,
				icon: response?.data?.weather[0]?.icon,
				main: response?.data?.weather[0]?.main,
			};
			yield put({
				type: 'putCurrentWeather',
				payload: responsePayload,
			});
		}
	},

	reducers: {
		putCurrentWeather(state, { payload }) {
			return {
				...state,
				currentWeather: payload,
			};
		}
	},
};

export default weather;
