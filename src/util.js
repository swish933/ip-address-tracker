import L from 'leaflet';
import markerIcon from './images/icon-location.svg';

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

export { icon };
