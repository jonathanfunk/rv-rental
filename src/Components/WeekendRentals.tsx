'use client';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import WeekendRentalList from './WeekendRentalList';
import { GlobalContext } from '@/context/GlobalState';
import { getNextFriday, getNextSunday } from '@/lib/utils';
import { RentalData } from '@/lib/types';

const WeekendRentals = () => {
	const [rentals, setRentals] = useState<RentalData[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_SEARCH_URL;
	const { state } = useContext(GlobalContext);
	const { currency } = state;

	useEffect(() => {
		setError(false);
		setLoading(true);
		setMessage('');
		const fetchData = async () => {
			try {
				const params = {
					'page[limit]': 6,
					recommended: true,
					instant_book: true,
					'filter[keywords]': 'Top rated',
					'date[from]': getNextFriday(),
					'date[to]': getNextSunday(),
					currency,
					include_unavailable: false,
				};
				const response = await axios.get(`${BASE_URL}/rentals`, {
					params,
				});
				setRentals(response.data.data);
			} catch (error) {
				setError(true);
				setMessage(`Error: ${error}`);
				setLoading(false);
			}
		};
		fetchData();
	}, [currency, BASE_URL]);

	return (
		<section className='section lg:flex lg:items-center'>
			<div className='text-center mb-20 px-8 md:px-16 lg:md-0 lg:text-left lg:w-1/3 2xl:pl-36 2xl:pr-28'>
				<h2 className='mb-3 text-5xl 2xl:text-6xl lg:text-left'>
					Book an RV {` `}
					<br className='hidden 2xl:block' />
					This Weekend!
				</h2>
				<p>Instantly book with one of these highly rated RVs in your area!</p>
			</div>
			<WeekendRentalList rentals={rentals} />
		</section>
	);
};

export default WeekendRentals;
