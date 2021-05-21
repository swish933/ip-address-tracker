import React from 'react';
import { info, resultItem } from '../css/Info.module.css';

const Info = () => {
	return (
		<div className={info}>
			<div className={resultItem}>
				<h3>IP ADDRESS</h3>
				<p>192.212.174.101</p>
			</div>
			<div className={resultItem}>
				<h3>LOCATION</h3>
				<p>Brooklyn, NY 10001</p>
			</div>
			<div className={resultItem}>
				<h3>TIMEZONE</h3>
				<p>UTC -05:00</p>
			</div>
			<div className={resultItem}>
				<h3>ISP</h3>
				<p>SpaceX Starlink</p>
			</div>
		</div>
	);
};

export default Info;
