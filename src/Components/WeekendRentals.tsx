'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import RentalCard from './RentalCard';

interface Rental {
	attributes: {
		vehicle_title: string;
		display_vehicle_type: string;
		sleeps: number;
		price_per_day: number;
		primary_image_url: string;
		score: number;
		location: {
			city: string;
			state: string;
		};
	};
}

const flickityOptions = {
	freeScroll: true,
	contain: true,
	prevNextButtons: false,
	pageDots: false,
};

const getNextFriday = () => {
	const today = new Date();
	const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
	const daysUntilFriday =
		dayOfWeek === 5 ? 7 : dayOfWeek < 5 ? 5 - dayOfWeek : 5 + (7 - dayOfWeek);
	const nextFriday = new Date(
		today.getTime() + daysUntilFriday * 24 * 60 * 60 * 1000
	);
	return nextFriday.toISOString().split('T')[0];
};

const getNextSunday = () => {
	const today = new Date();
	const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
	const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
	const nextSunday = new Date(
		today.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000
	);
	return nextSunday.toISOString().split('T')[0];
};

const WeekendRentals = () => {
	const [rentals, setRentals] = useState<Rental[]>([]);

	const BASE_URL = process.env.NEXT_PUBLIC_BASE_SEARCH_URL;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const nextFriday = getNextFriday();
				const nextSunday = getNextSunday();
				console.log(nextFriday, nextSunday);
				const response = await axios.get(`${BASE_URL}/rentals`, {
					params: {
						'page[limit]': 6,
						recommended: true,
						instant_book: true,
						'filter[keywords]': 'Top rated',
						'date[from]': nextFriday,
						'date[to]': nextSunday,
					},
				});
				setRentals(response.data.data);
			} catch (error) {
				console.error('Error fetching weekend rentals:', error);
			}
		};
		fetchData();
	}, [BASE_URL]);

	return (
		<section className='section lg:flex lg:items-center'>
			<div className='text-center mb-20 px-8 md:px-16 lg:md-0 lg:text-left lg:w-1/3 2xl:pl-36 2xl:pr-28'>
				<h2 className='text-left mb-3 text-5xl 2xl:text-6xl'>
					Book an RV {` `}
					<br className='hidden 2xl:block' />
					This Weekend!
				</h2>
				<p>Instantly book with one of these highly rated RVs in your area!</p>
			</div>
			<div className=' px-8 lg:px-0 lg:w-2/3'>
				<Flickity options={flickityOptions}>
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
						/>
					))}
				</Flickity>
			</div>
		</section>
	);
};

export default WeekendRentals;
