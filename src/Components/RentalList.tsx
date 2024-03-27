'use client';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import RentalCard from './RentalCard';
import { GlobalContext } from '@/context/GlobalState';
import { Rental } from '@/lib/types';
import { RentalList } from '@/lib/types';

const flickityOptions = {
	freeScroll: true,
	contain: true,
	prevNextButtons: false,
	pageDots: false,
};

const RentalList = ({ address, startDate, endDate, guests }: RentalList) => {
	const [rentals, setRentals] = useState<Rental[]>([]);
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_SEARCH_URL;
	const { state } = useContext(GlobalContext);
	const { currency } = state;

	useEffect(() => {
		const fetchData = async () => {
			if (address && startDate && endDate && guests) {
				try {
					const response = await axios.get(`${BASE_URL}/rentals`, {
						params: {
							address,
							'page[limit]': 12,
							//'page[offset]': 3,
							'date[from]': startDate,
							'date[to]': endDate,
							guests,
							currency,
							recommended: false,
						},
					});
					setRentals(response.data.data);
				} catch (error) {
					console.error('Error fetching rental list:', error);
				}
			}
		};
		fetchData();
	}, [BASE_URL, currency, address, startDate, endDate, guests]);

	return (
		<section className='section'>
			<div className='px-8 lg:px-16 2xl:px-36 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
		</section>
	);
};

export default RentalList;
