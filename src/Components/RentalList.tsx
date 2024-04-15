'use client';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import RentalCard from './RentalCard';
import { GlobalContext } from '@/context/GlobalState';
import { RentalData, RentalListProps, VehicleType } from '@/lib/types';

const RentalList = ({
	address,
	startDate,
	endDate,
	guests,
	types,
}: RentalListProps) => {
	const [rentals, setRentals] = useState<RentalData[]>([]);
	const [totalResults, setTotalResults] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_SEARCH_URL;
	const { state, dispatch } = useContext(GlobalContext);
	const { currency } = state;

	useEffect(() => {
		setError(false);
		setLoading(true);
		setMessage('');
		const fetchData = async () => {
			if (address !== null) {
				try {
					const params = {
						address,
						'page[limit]': 12,
						//'page[offset]': 3,
						'date[from]': startDate,
						'date[to]': endDate,
						sleeps: guests,
						currency,
						recommended: true,
						'filter[type]': types,
					};
					const response = await axios.get(`${BASE_URL}/rentals`, {
						params,
					});
					setRentals(response.data.data);
					setTotalResults(response.data.meta.total);
					fetchClasses(response.data.meta.vehicle_types);
					fetchMinPrice(response.data.meta.price_min);
					fetchMaxPrice(response.data.meta.price_max);
				} catch (error) {
					setError(true);
					setMessage(`Error: ${error}`);
					setLoading(false);
				}
			}
		};
		const fetchClasses = (classes: VehicleType[]) =>
			dispatch({ type: 'FETCH_CLASSES', payload: classes });
		const fetchMinPrice = (minPrice: number) =>
			dispatch({ type: 'FETCH_MIN_PRICE', payload: minPrice });
		const fetchMaxPrice = (maxPrice: number) =>
			dispatch({ type: 'FETCH_MAX_PRICE', payload: maxPrice });
		fetchData();
	}, [
		BASE_URL,
		currency,
		address,
		startDate,
		endDate,
		guests,
		types,
		dispatch,
	]);

	return (
		<section className='section'>
			<div className='px-8 lg:px-16 2xl:px-36'>
				<p className='text-xl mb-8'>
					{totalResults
						? `Total Results: ${totalResults}`
						: 'No results. Try refining your filters.'}
				</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{rentals.map((rental, i) => (
						<RentalCard
							key={i}
							image={rental.attributes.primary_image_url}
							title={rental.attributes.vehicle_title}
							type={rental.attributes.display_vehicle_type}
							sleeps={rental.attributes.sleeps}
							city={rental.attributes.location.city}
							state={rental.attributes.location.state}
							price={rental.attributes.price_per_day}
							score={rental.attributes.score}
							currency={rental.attributes.presentment_currency}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default RentalList;
