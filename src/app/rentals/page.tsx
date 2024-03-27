'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import RentalList from '@/components/RentalList';

const Rental = () => {
	const searchParams = useSearchParams();
	const [address, setAddress] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [guests, setGuests] = useState('');

	useEffect(() => {
		setAddress(searchParams.get('address') ?? '');
		setStartDate(searchParams.get('startdate') ?? '');
		setEndDate(searchParams.get('enddate') ?? '');
		setGuests(searchParams.get('guests') ?? '');
	}, [searchParams]);

	console.log(address, startDate, endDate, guests);

	return (
		<>
			<section className='section bg-gradient-to-br from-emerald-900 to-emerald-950'>
				<h1 className='mb-0 mt-28'>Discover Your Dream RV Rental</h1>
			</section>
			<RentalList
				address={address}
				startDate={startDate}
				endDate={endDate}
				guests={guests}
			/>
		</>
	);
};

export default Rental;
