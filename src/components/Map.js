import React from 'react';
// import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
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
				accessToken='pk.eyJ1Ijoibm9tc29pa2VtIiwiYSI6ImNrb3lkMTFmcTBnejQyb21zaXFlcjJjb28ifQ.2sxggqMTXrti_eP4gooHAw'
			/>
			<Marker position={position}></Marker>
		</MapContainer>
	);
};

export default Map;
