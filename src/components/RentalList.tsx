'use client';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import RentalCard from './RentalCard';
import RentalCardPlaceholder from './RentalCardPlaceholder';
import { GlobalContext } from '@/context/GlobalState';
import { RentalData, RentalListProps, VehicleType } from '@/lib/types';

const RentalList = ({
	address,
	startDate,
	endDate,
	guests,
	types,
	offset,
	minPrice,
	maxPrice,
}: RentalListProps) => {
	const [rentals, setRentals] = useState<RentalData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_SEARCH_URL;
	const { state, dispatch } = useContext(GlobalContext);
	const { currency, totalResults } = state;
	const placeholders = new Array(12).fill(null);

	useEffect(() => {
		setError(false);
		setLoading(true);
		const fetchData = async () => {
			if (address !== null) {
				try {
					const params = {
						address,
						'page[limit]': 12,
						'page[offset]': offset === 1 ? 0 : offset,
						'date[from]': startDate,
						'date[to]': endDate,
						sleeps: guests,
						currency,
						recommended: true,
						'filter[type]': types,
						'price[min]': minPrice,
						'price[max]': maxPrice,
					};
					console.log('Params...', params);
					const response = await axios.get(`${BASE_URL}/rentals`, {
						params,
					});
					setRentals(response.data.data);
					fetchResults(response.data.meta.total);
					fetchClasses(response.data.meta.vehicle_types);
					fetchMinPrice(response.data.meta.price_min);
					fetchMaxPrice(response.data.meta.price_max);
					setLoading(false);
				} catch (error) {
					setError(true);
					console.error(error);
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
		const fetchResults = (totalResults: number) =>
			dispatch({ type: 'FETCH_RESULTS', payload: totalResults });
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
		offset,
		minPrice,
		maxPrice,
	]);

	return (
		<>
			{loading ? (
				<>
					<p className='text-xl mb-8'>Loading...</p>
					<div className='mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{placeholders.map((_, i) => (
							<RentalCardPlaceholder key={i} />
						))}
					</div>
				</>
			) : (
				<>
					<p className='text-xl mb-8'>Total Results: {totalResults}</p>
					<div className=' mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{rentals.map((rental, i) => (
							<RentalCard
								key={i}
								id={rental.id}
								image={rental.attributes.primary_image_url}
								title={rental.attributes.vehicle_title}
								type={rental.attributes.display_vehicle_type}
								sleeps={rental.attributes.sleeps}
								city={rental.attributes.location.city}
								state={rental.attributes.location.state}
								price={rental.attributes.price_per_day}
								score={rental.attributes.score}
								currency={rental.attributes.presentment_currency}
								startDate={startDate}
								endDate={endDate}
							/>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default RentalList;
