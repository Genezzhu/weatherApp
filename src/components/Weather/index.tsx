import React from 'react';
import { connect } from 'dva';
import { WeatherModelState } from '@/interfaces/weather';
import { getCardinalDirection, convertCelsiusToFahrenheit } from '@/utils/utils';
import { TEMP_UNIT } from '@/utils/constants';
import './index.scss';

interface WeatherProps {
	weather: WeatherModelState;
	title: string;
	tempUnit: string;
	isDisplayWind: Boolean;
}

const Weather: React.FC<WeatherProps> = (props) => {
	const { weather: { currentWeather }, title, tempUnit, isDisplayWind } = props;


	return (
		<div className='weatherDetailContainer'>
			<div className='title'>
				{title === '' ? 'Title of widget'.toUpperCase() : title.toUpperCase()}
			</div>
			<div className='detailContainer'>
				<div className='weatherIcon'>
					<img src={`/images/weather/${currentWeather?.icon}.png`} alt={currentWeather?.main} className='icon' />
				</div>
				<div className='contentDetail'>
					<p className='city'>
						{currentWeather?.cityName}
					</p>
					<p className='temp'>
						{tempUnit === TEMP_UNIT.METRIC ? Math.round(currentWeather?.temp) : Math.round(convertCelsiusToFahrenheit(currentWeather?.temp))}<span className='tempDegree'>°</span>
					</p>
					<p className='wind'>
						{isDisplayWind && (
							<>
								<strong>Wind</strong>
								<span className='direction'>{getCardinalDirection(currentWeather?.wind?.deg)}</span>
								{Math.round(currentWeather?.wind?.speed)}km/h
							</>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default connect(({ weather }) => ({
	weather
}))(Weather);