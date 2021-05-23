import React, { useState } from 'react';
import arrow from '../images/icon-arrow.svg';
import {
	submit,
	searchInput,
	search,
	searchContainer,
} from '../css/Search.module.css';

const Search = () => {
	const [input, setInput] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		console.log(input);
		// Api(input);

		setInput('');
	};

	return (
		<div className={search}>
			<h1>IP Address Tracker </h1>
			<div className={searchContainer}>
				<form onSubmit={onSubmit}>
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
					<button type='submit' className={submit}>
						<img src={arrow} alt='submit-arrow-icon' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Search;
