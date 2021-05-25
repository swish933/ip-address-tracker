import React from 'react';
import { icon } from '../util';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const { REACT_APP_ACCESS_TOKEN } = process.env;
const Map = () => {
	// const [position, setPosition] = useState([51.505, -0.09]);
	const position = [51.505, -0.09];
	return (
		<MapContainer
			center={position}
			zoom={13}
			zoomControl={false}
			style={{ width: '100%', height: '100%' }}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
				zoomOffset={-1}
				tileSize={512}
				id='mapbox/streets-v11'
				accessToken={REACT_APP_ACCESS_TOKEN}
			/>
			<Marker position={position} icon={icon}></Marker>
		</MapContainer>
	);
};

export default Map;
