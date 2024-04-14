'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import SearchForm from '@/components/SearchForm';
import RentalList from '@/components/RentalList';
import { SearchData } from '@/lib/types';
import './style.css';

const Rental = () => {
	const searchParams = useSearchParams();
	const [address, setAddress] = useState<string | null>(null);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [guests, setGuests] = useState('');

	useEffect(() => {
		setAddress(searchParams.get('address') ?? '');
		setStartDate(searchParams.get('startdate') ?? '');
		setEndDate(searchParams.get('enddate') ?? '');
		setGuests(searchParams.get('guests') ?? '');
	}, [searchParams]);

	const handleSearchSubmit = (searchData: SearchData) => {
		console.log(searchData);
	};

	return (
		<>
			<section className='section bg-gradient-to-br from-emerald-900 to-emerald-950'>
				<h1 className='mb-0 mt-28'>Discover Your Dream RV Rental</h1>
			</section>
			<SearchForm
				onSubmit={handleSearchSubmit}
				defaultAddress={searchParams.get('address') ?? ''}
				defaultStartDate={searchParams.get('startdate') ?? ''}
				defaultEndDate={searchParams.get('enddate') ?? ''}
				defaultGuests={searchParams.get('guests') ?? ''}
			/>
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
