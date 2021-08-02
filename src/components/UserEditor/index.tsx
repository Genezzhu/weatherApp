import React from 'react';
import { connect } from 'dva';
import { TEMP_UNIT } from '@/utils/constants';
import './index.scss';

interface UserEditorProps {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	tempUnit: string;
	setTempUnit: React.Dispatch<React.SetStateAction<string>>;
	isDisplayWind: Boolean;
	setIsDisplayWind: React.Dispatch<React.SetStateAction<Boolean>>
}


const UserEditor: React.FC<UserEditorProps> = (props) => {
	const { title, setTitle, tempUnit, setTempUnit, isDisplayWind, setIsDisplayWind } = props;
	
	return (
		<div className='inputDetailContainer'>
			<table className='detailTable'>
				<tr>
					<td>
						Title
					</td>
				</tr>
				<tr>
					<td>
						<input
							type='text'
							name='title'
							placeholder='Title of widget'
							value={title}
							onChange={e => setTitle(e.target.value)}
							className='textInput'
						/>
					</td>
				</tr>
				<tr>
					<td>
						Temperature
					</td>
				</tr>
				<tr>
					<td className='selection'>
						<div className='tempUnit'>
							<input
								type='radio'
								name='temperature'
								value={TEMP_UNIT.METRIC}
								onChange={e => setTempUnit(e.target.value)}
								checked={tempUnit === TEMP_UNIT.METRIC} />°C
						</div>
						<div className='tempUnit'>
							<input
								type='radio'
								name='temperature'
								value={TEMP_UNIT.IMPERIAL}
								onChange={e => setTempUnit(e.target.value)}
								checked={tempUnit === TEMP_UNIT.IMPERIAL} />°F
						</div>
					</td>
				</tr>
				<tr>
					<td>
						Wind
					</td>
				</tr>
				<tr>
					<td className='selection'>
						<div className='isDisplayWind'>
							<input
								type='radio'
								name='wind'
								value='true'
								onChange={e => setIsDisplayWind(true)}
								checked={isDisplayWind === true} />On
						</div>
						<div className='isDisplayWind'>
							<input
								type='radio'
								name='wind'
								value='false'
								onChange={e => setIsDisplayWind(false)}
								checked={isDisplayWind === false} />Off
						</div>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default connect(({ weather }) => ({
	inputs: weather.userInput
}))(UserEditor);