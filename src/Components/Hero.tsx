'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Autocomplete from 'react-google-autocomplete';
import Datepicker from 'react-tailwindcss-datepicker';
import { Map, Person } from './Icons';
import { AddressObject, DateRange } from '@/lib/types';

const Hero = () => {
	const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
	const router = useRouter();
	const [address, setAddress] = useState<AddressObject | null>(null);
	const [guests, setGuests] = useState('');
	const [date, setDate] = useState<DateRange>({
		startDate: null,
		endDate: null,
	});

	const { startDate, endDate } = date;

	const handleDateChange = (newDate: any) => {
		setDate(newDate);
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log(address);
		let dateRangeParam = '';
		let addressParam = address ? `address=${address.formatted_address}` : '';
		let guestsParam = guests ? `&guests=${guests}` : '';
		if (startDate && endDate) {
			dateRangeParam = `&startdate=${startDate}&enddate=${endDate}`;
		}

		router.push(`/rentals/?${addressParam}${dateRangeParam}${guestsParam}`);
	};
	return (
		<section className='bg-emerald-900 bg-opacity-30 h-screen relative flex items-end justify-center pb-8 md:pb-28'>
			<Image
				src='/images/rv-rental-hero-bg.webp'
				alt='RV on the beach'
				fill
				sizes='100vw'
				className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
				priority
			/>
			<div className='px-8 max-w-5xl'>
				<h1>Find the Perfect RV for Your Ultimate Adventure</h1>
				<div className='p-5 rounded-[40px] md:rounded-full backdrop-blur-lg bg-white bg-opacity-80 flex justify-center items-center lg:px-10 lg:py-7'>
					<form
						className='md:flex justify-center gap-3 items-center w-full'
						onSubmit={handleSubmit}
					>
						<div className='flex-grow md:flex flex-1'>
							<div className='mb-4 md:mb-0 md:w-1/3 md:mr-3 relative'>
								<Autocomplete
									className='w-full'
									apiKey={key}
									onPlaceSelected={(place) => setAddress(place)}
								/>
								<div className='absolute right-0 top-0 h-full px-3 text-gray-400 flex items-center pr'>
									<Map className='h-5 w-5' />
								</div>
							</div>
							<Datepicker
								value={date}
								placeholder={'Dates'}
								containerClassName='w-full mb-4 md:mb-0 md:w-1/3 md:mr-4 relative'
								inputClassName='w-full text-base outline-none border-solid border-[1px] border-gray-200 pl-6 pr-10 h-14 rounded-full bg-white focus:border-gray-400'
								onChange={handleDateChange}
								primaryColor={'emerald'}
								useRange={false}
								disabledDates={[
									{
										startDate: new Date(0).toISOString().split('T')[0],
										endDate: new Date(Date.now() - 24 * 60 * 60 * 1000)
											.toISOString()
											.split('T')[0],
									},
								]}
							/>
							<div className='mb-4 md:mb-0 md:w-1/3 md:mr-3 relative'>
								<input
									className='w-full'
									type='number'
									name='guests'
									placeholder='Guests'
									id='guests'
									value={guests}
									onChange={(e) => setGuests(e.target.value)}
								/>
								<div className='absolute right-0 top-0 h-full px-3 text-gray-400 flex items-center pr'>
									<Person className='h-5 w-5' />
								</div>
							</div>
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
