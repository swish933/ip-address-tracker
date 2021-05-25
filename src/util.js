import L from 'leaflet';
import markerIcon from './images/icon-location.svg';
import publicIp from 'public-ip';

const { REACT_APP_API_KEY } = process.env;

const icon = new L.Icon({
	iconUrl: markerIcon,
	iconRetinaUrl: markerIcon,
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: [35, 45],
	className: 'markerIcon',
});

const getIp = async () => {
	try {
		let ip = await publicIp.v4();
		let locationData = await getIpLocation(ip);
		return { ip, locationData };
	} catch (err) {
		console.error(err.message);
	}
};

const getIpLocation = async (ip) => {
	try {
		const response = await fetch(
			`https://geo.ipify.org/api/v1?apiKey=${REACT_APP_API_KEY}&ipAddress=${ip}`
		);

		if (!response.ok) {
			throw new Error('Network issue');
		}
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err.message);
	}
};

export { icon, getIp, getIpLocation };
