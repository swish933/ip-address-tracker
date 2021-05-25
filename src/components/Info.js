import React from 'react';
import { info, resultItem } from '../css/Info.module.css';
import Loader from './Loader';

const Info = ({ ip, isp, location, loaded }) => {
	return (
		<div className={info}>
			<div className={resultItem}>
				<h3>IP ADDRESS</h3>
				{loaded ? <p>{ip}</p> : <Loader />}
			</div>
			<div className={resultItem}>
				<h3>LOCATION</h3>
				{loaded ? (
					<p>{`${location?.city}, ${location?.country}`}</p>
				) : (
					<Loader />
				)}
			</div>
			<div className={resultItem}>
				<h3>TIMEZONE</h3>
				{loaded ? <p>{`UTC ${location?.timezone}`}</p> : <Loader />}
			</div>
			<div className={resultItem}>
				<h3>ISP</h3>
				{loaded ? <p>{isp}</p> : <Loader />}
			</div>
		</div>
	);
};

export default Info;
