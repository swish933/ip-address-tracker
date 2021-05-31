import React, { Fragment, useState, useEffect, useRef } from 'react';
import { icon } from '../util';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const { REACT_APP_ACCESS_TOKEN } = process.env;
const defaultCenter = [0, 0];
const defaultZoom = 4;

const ChangeMapView = ({ coords }) => {
	const marker = useRef();
	const map = useMap();
	useEffect(() => {
		marker.current.openPopup();
	}, []);
	map.flyTo(coords, 14, { duration: 1.5 });
	return (
		<Marker icon={icon} position={coords} ref={marker}>
			<Popup>Right here!</Popup>
		</Marker>
	);
};

const Map = ({ loaded, lat, lng }) => {
	const [position, setPosition] = useState([0, 0]);

	useEffect(() => {
		setPosition([lat, lng]);
	}, [lat, lng]);

	return (
		<Fragment>
			{loaded ? (
				<MapContainer
					center={defaultCenter}
					zoom={defaultZoom}
					zoomControl={false}
					style={{ height: '100%' }}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
						zoomOffset={-1}
						tileSize={512}
						id='mapbox/streets-v11'
						accessToken={REACT_APP_ACCESS_TOKEN}
					/>

					<ChangeMapView coords={position}></ChangeMapView>
				</MapContainer>
			) : (
				''
			)}
		</Fragment>
	);
};

export default Map;
