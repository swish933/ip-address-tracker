import React from 'react';
import { info, resultItem } from '../css/Info.module.css';

const Info = ({ ip, isp, location, loaded }) => {
	return (
		<div className={info}>
			<div className={resultItem}>
				<h3>IP ADDRESS</h3>
				<p>{ip}</p>
			</div>
			<div className={resultItem}>
				<h3>LOCATION</h3>
				<p>{`${location?.city}, ${location?.country}`}</p>
			</div>
			<div className={resultItem}>
				<h3>TIMEZONE</h3>
				<p>{`UTC ${location?.timezone}`}</p>
			</div>
			<div className={resultItem}>
				<h3>ISP</h3>
				<p> {isp}</p>
			</div>
		</div>
	);
};

export default Info;
