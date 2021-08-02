/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect, SubscriptionAPI } from 'dva';
import { ILocation } from '@/interfaces/weather';
import Spinner from '@/components/Spinner';
import Weather from '@/components/Weather';
import UserEditor from '@/components/UserEditor';
import { TEMP_UNIT } from '@/utils/constants';
import './index.scss';

interface HomeProps extends SubscriptionAPI {
	dispatch;
	getLocationLoading: Boolean;
	fetchWeatherLoading: Boolean;
}

const Home: React.FC<HomeProps> = (props) => {
	const { dispatch, getLocationLoading, fetchWeatherLoading } = props;
	const [currentLatitude, setCurrentLatitude] = useState<number>(null);
	const [currentLongtitude, setCurrentLongtitude] = useState<number>(null);
	const [locationError, setLocationError] = useState<Boolean>(false);
	const [title, setTitle] = useState<string>('');
	const [tempUnit, setTempUnit] = useState<string>(TEMP_UNIT.METRIC);
	const [isDisplayWind, setIsDisplayWind] = useState<Boolean>(true);

	useEffect(() => {
		(async () => {
			try {
				const location = await dispatch({
					type: 'weather/getGeoLocation'
				});
				setCurrentLatitude(location.latitude);
				setCurrentLongtitude(location.longtitude);
			} catch (error) {
				setLocationError(true);
			}
		})();
		return () => {
			setCurrentLatitude(null);
			setCurrentLongtitude(null);
			setLocationError(false);
		}
	}, []);

	useEffect(() => {
		if (!locationError) {
			if (currentLatitude && currentLongtitude) {
				const payload: ILocation = {
					latitude: currentLatitude,
					longtitude: currentLongtitude
				}
				dispatch({
					type: 'weather/fetchCurrentLocationWeather',
					payload
				});
			}
		}
	}, [currentLatitude, currentLongtitude])

	return (
		<div className='weatherContainer'>
			<div className='contentContainer'>
				{
					(getLocationLoading || fetchWeatherLoading)
						? (<Spinner loading={getLocationLoading || fetchWeatherLoading} />)
						: (
							<table>
								<tbody>
									<tr>
										<td>
											<UserEditor
												title={title}
												setTitle={setTitle}
												tempUnit={tempUnit}
												setTempUnit={setTempUnit}
												isDisplayWind={isDisplayWind}
												setIsDisplayWind={setIsDisplayWind}
											/>
										</td>
										<td>
											<Weather
												title={title}
												tempUnit={tempUnit}
												isDisplayWind={isDisplayWind}
											/>
										</td>
									</tr>
								</tbody>
							</table>
							// <>
							// 	<UserEditor
							// 		title={title}
							// 		setTitle={setTitle}
							// 		tempUnit={tempUnit}
							// 		setTempUnit={setTempUnit}
							// 		isDisplayWind={isDisplayWind}
							// 		setIsDisplayWind={setIsDisplayWind}
							// 	/>
							// 	<div className='divider' />
							// 	<Weather
							// 		title={title}
							// 		tempUnit={tempUnit}
							// 		isDisplayWind={isDisplayWind}
							// 	/>
							// </>
						)
				}
				
			</div>
		</div>
	);
};

export default connect(({ weather, loading }) => ({
	weather,
	getLocationLoading: loading.effects['weather/getGeoLocation'],
	fetchWeatherLoading: loading.effects['weather/fetchCurrentLocationWeather']
}))(Home);
