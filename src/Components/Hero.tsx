'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Autocomplete from 'react-google-autocomplete';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Location {
	formatted_address: string;
}

const Hero = () => {
	const [location, setLocation] = useState<Location>({ formatted_address: '' });
	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
		null,
		null,
	]);
	const [startDate, endDate] = dateRange;
	const [guests, setGuests] = useState('');

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log('Form submitted!');
		console.log('Location:', location.formatted_address);
		console.log('Date Range:', startDate, 'to', endDate);
		console.log('Guests:', guests);
	};

	const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
	return (
		<section className='bg-emerald-900 bg-opacity-30 h-screen relative flex items-end justify-center pb-8 md:pb-28'>
			<Image
				className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
				src='/images/rv-rental-hero-bg.webp'
				alt='Desktop Mockups'
				width={1920}
				height={1080}
				priority
			/>
			<div className='px-8 max-w-5xl'>
				<h1>Find Your Perfect RV for the Ultimate Adventure</h1>
				<div className='p-5 rounded-[40px] md:rounded-full backdrop-blur-lg bg-white bg-opacity-80 flex justify-center items-center lg:px-10 lg:py-7'>
					<form
						className='md:flex justify-center gap-3 items-center w-full'
						onSubmit={handleSubmit}
					>
						<div className='flex-grow md:flex flex-1'>
							<Autocomplete
								className='w-full mb-4 md:mb-0 md:w-1/3 md:mr-3'
								apiKey={key}
								onPlaceSelected={(place) => setLocation(place)}
							/>
							{/* <input type='text' name='daterange' id='daterange' /> */}
							<DatePicker
								wrapperClassName='w-full mb-4 md:mb-0 md:w-1/3 md:mr-4'
								selectsRange={true}
								startDate={startDate}
								endDate={endDate}
								minDate={new Date()}
								placeholderText='Start Date - End Date'
								className='w-full'
								onChange={(update) => {
									setDateRange(update);
								}}
							/>
							<input
								className='w-full mb-4 md:mb-0 md:w-1/3'
								type='number'
								name='guests'
								placeholder='Guests'
								id='guests'
								value={guests}
								onChange={(e) => setGuests(e.target.value)}
							/>
						</div>
						<button
							className='w-full md:w-14 h-14 bg-emerald-900 rounded-full flex justify-center items-center text-white'
							type='submit'
						>
							<FaMagnifyingGlass />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Hero;
