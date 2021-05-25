import { useState, useEffect } from 'react';
import { getIp, getIpLocation } from './util';
import './App.css';
import Dash from './components/Dash';
import Map from './components/Map';

function App() {
	const [loading, setLoading] = useState(false);
	const [info, setInfo] = useState({});
	const [ip, setIp] = useState('');

	useEffect(
		() =>
			(async () => {
				let { ip, locationData } = await getIp();

				setIp(ip);
				setInfo(locationData);
			})(),
		[]
	);

	const onSubmit = async (addr) => {
		let data = await getIpLocation(addr);
		console.log(data);
		setInfo({ ...data });
	};

	return (
		<div className='App'>
			<div className='dash'>
				<Dash Submit={onSubmit} ip={ip} info={info} />
			</div>
			<div className='map'>
				<Map />
			</div>
		</div>
	);
}

export default App;
