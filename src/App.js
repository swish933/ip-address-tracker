import { useState, useEffect } from 'react';
import { getIp, getIpLocation } from './util';
import './App.css';
import Dash from './components/Dash';
import Map from './components/Map';

function App() {
	const [loading, setLoading] = useState(false);
	const [info, setInfo] = useState({});
	const [ipAddr, setIpAddr] = useState('');

	useEffect(
		() =>
			(async () => {
				setLoading(true);
				let { ip, locationData } = await getIp();
				setIpAddr(ip);
				setInfo(locationData);
				setLoading(false);
			})(),
		[]
	);

	const onSubmit = async (addr) => {
		setIpAddr(addr);
		let locationData = await getIpLocation(ipAddr);
		setInfo(locationData);
	};

	const { ip, isp, location } = info;

	return (
		<div className='App'>
			<div className='dash'>
				<Dash
					Submit={onSubmit}
					ip={ip}
					isp={isp}
					location={location}
					loaded={loading}
				/>
			</div>
			<div className='map'>
				<Map location={location} />
			</div>
		</div>
	);
}

export default App;
