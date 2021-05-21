import React, { useState } from 'react';
import cx from 'classnames';
import {
	submit,
	searchInput,
	search,
	searchContainer,
	icon,
	form,
} from '../css/Search.module.css';

const Search = () => {
	const [input, setInput] = useState('');

	const onSubmit = () => {};

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
						placeholder='Search for any IP address or domain'
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
					<button type='submit' className={submit}>
						<i
							className={cx('fas', 'fa-angle-right', icon)}
							aria-hidden='true'></i>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Search;
