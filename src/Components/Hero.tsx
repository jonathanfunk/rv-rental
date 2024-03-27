'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Autocomplete from 'react-google-autocomplete';
import Datepicker from 'react-tailwindcss-datepicker';
import { formatDate } from '@/lib/utils';
import { Map, Person } from './Icons';

interface Address {
	formatted_address: string;
}

interface DateRange {
	startDate: Date | null;
	endDate: Date | null;
}

const Hero = () => {
	const router = useRouter();
	const [address, setAddress] = useState<Address>({ formatted_address: '' });
	const [guests, setGuests] = useState('');
	const [date, setDate] = useState<DateRange>({
		startDate: null,
		endDate: null,
	});

	const { startDate, endDate } = date;

	const handleValueChange = (newDate: any) => {
		setDate(newDate);
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log('Date is..', date, startDate, endDate);
		router.push(
			`/rentals/?address=${address.formatted_address}&startdate=${startDate}&enddate=${endDate}&guests=${guests}`
		);
	};

	const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

	return (
		<section className='bg-emerald-900 bg-opacity-30 h-screen relative flex items-end justify-center pb-8 md:pb-28'>
			<Image
				className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
				src='/images/rv-rental-hero-bg.webp'
				alt='RV on the beach'
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
								onChange={handleValueChange}
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
