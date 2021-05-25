import React, { useState } from 'react';
import arrow from '../images/icon-arrow.svg';
import {
	submitBtn,
	searchInput,
	search,
	searchContainer,
} from '../css/Search.module.css';

const Search = ({ Submit }) => {
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input) {
			Submit(input);
			setInput('');
		}
	};

	return (
		<div className={search}>
			<h1>IP Address Tracker </h1>
			<div className={searchContainer}>
				<form onSubmit={handleSubmit}>
					<input
						className={searchInput}
						type='text'
						name='search'
						alt='ip-search-input'
						value={input}
						placeholder='Search for any IP address or domain'
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
					<button type='submit' className={submitBtn}>
						<img src={arrow} alt='submit-arrow-icon' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Search;
