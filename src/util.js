import L from 'leaflet';
import markerIcon from './images/icon-location.svg';

const { REACT_APP_API_KEY } = process.env;

export const icon = new L.Icon({
	iconUrl: markerIcon,
	iconRetinaUrl: markerIcon,
	iconAnchor: null,
	popupAnchor: [0, 0],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: [35, 45],
	className: 'markerIcon',
});

export const getIp = async () => {
	try {
		let response = await fetch('https://api64.ipify.org?format=json');
		let { ip } = await response.json();
		let locationData = await getIpLocation(ip);
		return locationData;
	} catch (err) {
		console.error(err.message, err.status);
	}
};

export const getIpLocation = async (ip) => {
	let response, data;
	let ipTest = new RegExp(
		/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
	);
	try {
		if (ipTest.test(ip)) {
			response = await fetch(
				`https://geo.ipify.org/api/v1?apiKey=${REACT_APP_API_KEY}&ipAddress=${ip}`
			);
		} else {
			response = await fetch(
				`https://geo.ipify.org/api/v1?apiKey=${REACT_APP_API_KEY}&domain=${ip}`
			);
		}
		data = await response.json();
		return data;
	} catch (err) {
		console.log(err.message);
	}
};
