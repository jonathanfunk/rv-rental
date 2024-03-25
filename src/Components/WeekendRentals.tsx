'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Rental {
	attributes: {
		vehicle_title: string;
	};
}

const WeekendRentals = () => {
	const [rentals, setRentals] = useState<Rental[]>([]);

	const BASE_URL = process.env.NEXT_PUBLIC_BASE_SEARCH_URL;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/rentals`, {
					params: {
						'page[limit]': 4,
						recommended: true,
						instant_book: true,
					},
					headers: {
						Partner: process.env.PARTNER_ID,
					},
				});
				setRentals(response.data.data);
			} catch (error) {
				console.error('Error fetching weekend rentals:', error);
			}
		};
		fetchData();
	}, [BASE_URL]);
	console.log(rentals);

	return (
		<section className='pt-36 pb-52 flex items-center'>
			<div className='pl-36 pr-28 w-1/3'>
				<h2 className=' text-6xl font-light text-gray-900 mb-3'>
					Book an RV<br></br>This Weekend!
				</h2>
				<p>Instantly book with one of these highly rated RVs in your area!</p>
			</div>
			<div className='w-2/3'>
				{rentals.map((rental, i) => (
					<h3 key={i}>{rental.attributes.vehicle_title}</h3>
				))}
			</div>
		</section>
	);
};

export default WeekendRentals;
