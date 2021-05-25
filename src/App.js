import { useState, useEffect } from 'react';
import { getIp, getIpLocation } from './util';
import './App.css';
import Dash from './components/Dash';
import Map from './components/Map';

function App() {
	const [loaded, setLoaded] = useState(false);
	const [info, setInfo] = useState({});
	const [ipAddr, setIpAddr] = useState('');

	useEffect(
		() =>
			(async () => {
				setLoaded(false);
				let { ip, locationData } = await getIp();
				setIpAddr(ip);
				setInfo(locationData);
				setLoaded(true);
			})(),
		[]
	);

	const onSubmit = async (addr) => {
		setLoaded(false);
		setIpAddr(addr);
		let locationData = await getIpLocation(ipAddr);
		setInfo(locationData);
		setLoaded(true);
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
					loaded={loaded}
				/>
			</div>
			<div className='map'>
				<Map location={location} loaded={loaded} />
			</div>
		</div>
	);
}

export default App;
