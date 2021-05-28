import { useState, useEffect } from 'react';
import { getIp, getIpLocation } from './util';
import './App.css';
import Dash from './components/Dash';
import Map from './components/Map';

function App() {
	const [loaded, setLoaded] = useState(false);
	const [info, setInfo] = useState({});

	useEffect(
		() =>
			(async () => {
				try {
					setLoaded(false);
					let { locationData } = await getIp();
					setInfo(locationData);
					setLoaded(true);
				} catch (e) {
					console.log(e.message);
				}
			})(),
		[]
	);

	const onSubmit = async (addr) => {
		setLoaded(false);
		let locationData = await getIpLocation(addr);
		setInfo(locationData);
		setLoaded(true);
	};

	const { ip, isp, location } = info;
	const lat = location?.lat;
	const lng = location?.lng;

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
				<Map loaded={loaded} lat={lat} lng={lng}></Map>
			</div>
		</div>
	);
}

export default App;
