import { useState, useContext, useEffect, SetStateAction } from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { Map, Person } from '@/components/Icons';
import PopOverGroup from './PopOverGroup';
import Autocomplete from 'react-google-autocomplete';
import Datepicker from 'react-tailwindcss-datepicker';
import RangeSlider from 'react-range-slider-input';
import { PrevSelectedClasses, PriceRange, DateRange } from '@/lib/types';
import { Dialog } from '@headlessui/react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid';
import {
	getCurrencySymbol,
	priceInDollars,
	capitalizeEachWord,
} from '@/lib/utils';
import { SearchProps } from '@/lib/types';
import 'react-range-slider-input/dist/style.css';

const SearchForm = ({
	onSubmit,
	defaultAddress,
	defaultStartDate,
	defaultEndDate,
	defaultGuests,
	defaultType,
}: SearchProps) => {
	const { state } = useContext(GlobalContext);
	const { currency, classes, minPrice, maxPrice } = state;
	const currencySymbol = getCurrencySymbol(currency);
	const [address, setAddress] = useState(defaultAddress);
	const [date, setDate] = useState<DateRange>({
		startDate: defaultStartDate,
		endDate: defaultEndDate,
	});

	const [guests, setGuests] = useState(defaultGuests);
	const [selectedClasses, setSelectedClasses] = useState<PrevSelectedClasses>({
		[defaultType]: true,
	});
	const [isOpen, setIsOpen] = useState(false);
	const minPriceDollars = priceInDollars(minPrice);
	const maxPriceDollars = priceInDollars(maxPrice);
	const [range, setRange] = useState<PriceRange>([
		minPriceDollars,
		maxPriceDollars,
	]);
	const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

	useEffect(() => {
		const minPriceDollars = priceInDollars(minPrice);
		const maxPriceDollars = priceInDollars(maxPrice);
		setRange([minPriceDollars, maxPriceDollars]);
	}, [maxPrice, minPrice, address]);

	const handleDateChange = (newDate: any) => {
		setDate(newDate);
	};

	const handleClassesChange = (type: string) => {
		setSelectedClasses((prevSelectedClasses) => ({
			...prevSelectedClasses,
			[type]: !prevSelectedClasses[type],
		}));
	};

	const handleGuestsChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setGuests(e.target.value);
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const data = {
			address,
			date,
			guests,
			selectedClasses,
			range,
		};
		onSubmit(data);
		setIsOpen(false);
	};

	const handleClearFilters = (e: { preventDefault: () => void }) => {
		setAddress('');
		const minPriceDollars = priceInDollars(minPrice);
		const maxPriceDollars = priceInDollars(maxPrice);
		setRange([minPriceDollars, maxPriceDollars]);
		setGuests('');
		setDate({
			startDate: null,
			endDate: null,
		});
		setSelectedClasses({});
	};

	return (
		<div className='bg-gray-50 justify-center items-center w-full lg:p-5 lg:z-0 lg:static lg:flex lg:px-10 lg:py-7'>
			<form
				className='hidden lg:flex justify-center gap-3 items-center w-full'
				onSubmit={handleSubmit}
			>
				<div className='items-center w-2/3 flex'>
					<div className='mb-4 md:mb-0 md:mr-4 relative'>
						<label htmlFor='autocomplete'>Location</label>
						<Autocomplete
							id='autocomplete'
							className='w-full'
							apiKey={key}
							value={address}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setAddress(e.target.value)
							}
							onPlaceSelected={(place) => setAddress(place.formatted_address)}
						/>
						<div className='absolute right-0 top-0 h-full px-3 text-gray-400 flex items-center pr'>
							<Map className='h-5 w-5' />
						</div>
					</div>
					<div className='mb-4 md:mb-0 md:mr-4 relative'>
						<label htmlFor='datepicker'>Dates</label>
						<Datepicker
							value={date}
							placeholder={'Dates'}
							containerClassName='w-full'
							inputClassName='w-full text-base outline-none border-solid border-[1px] border-gray-200 pl-6 pr-10 h-14 rounded-full bg-white focus:border-gray-400'
							onChange={handleDateChange}
							primaryColor={'emerald'}
							useRange={false}
							// disabledDates={[
							// 	{
							// 		startDate: new Date(0).toISOString().split('T')[0],
							// 		endDate: new Date(Date.now() - 24 * 60 * 60 * 1000)
							// 			.toISOString()
							// 			.split('T')[0],
							// 	},
							// ]}
						/>
					</div>
					<div className='mb-4 md:mb-0 md:mr-4 relative'>
						<label htmlFor='guests'>Number of Guests</label>
						<input
							className='w-full'
							type='number'
							name='guests'
							placeholder='Guests'
							id='guests'
							value={guests}
							min='1'
							onChange={handleGuestsChange}
						/>
						<div className='absolute right-0 top-0 h-full px-3 text-gray-400 flex items-center pr'>
							<Person className='h-5 w-5' />
						</div>
					</div>
					<PopOverGroup ButtonTitle='Types'>
						<div className='p-8'>
							{classes.map((item, i) => (
								<div className='relative flex gap-x-3 py-1' key={i}>
									<div className='flex h-6 items-center'>
										<input
											id={item.type}
											name={item.type}
											type='checkbox'
											className='form-checkbox h-4 w-4 rounded-full border-gray-300 checked:bg-emerald-900 focus:ring-emerald-600 focus:checked:bg-emerald-900 checked:hover:bg-emerald-800'
											checked={selectedClasses[item.type] || false}
											onChange={() => handleClassesChange(item.type)}
										/>
									</div>
									<div className='text-sm leading-6'>
										<label
											htmlFor={item.type}
											className='text-gray-900 text-lg static'
										>
											{capitalizeEachWord(item.label)}
										</label>
									</div>
								</div>
							))}
						</div>
					</PopOverGroup>
					<PopOverGroup ButtonTitle='Price Range'>
						<div className='p-8'>
							<RangeSlider
								className='custom-range-styles'
								value={range}
								onInput={setRange}
								min={minPriceDollars}
								max={maxPriceDollars}
							/>
							<p className='mt-4'>
								{currencySymbol}
								{range[0]} - {currencySymbol}
								{range[1]}
							</p>
						</div>
					</PopOverGroup>
				</div>
				<div className='lg:w-1/3 lg:flex lg:justify-end gap-5'>
					<button onClick={handleClearFilters}>Clear Filters</button>
					<button className='btn btn-small' type='submit'>
						Apply Filters
					</button>
				</div>
			</form>
			<button
				className='lg:hidden btn flex items-center fixed bottom-6 right-6 z-10'
				onClick={() => setIsOpen(true)}
			>
				<AdjustmentsHorizontalIcon
					className='h-5 w-5 flex-none text-gray-400 inline mr-2'
					aria-hidden='true'
				/>
				Filters
			</button>
			{/* <Transition.Root show={isOpen} as={Fragment}> */}
			<Dialog
				open={isOpen}
				as='div'
				className='relative z-10'
				onClose={() => setIsOpen(false)}
			>
				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full'>
							{/* <Transition.Child
									as={Fragment}
									enter='transform transition ease-in-out duration-500'
									enterFrom='translate-x-full'
									enterTo='translate-x-0'
									leave='transform transition ease-in-out duration-500'
									leaveFrom='translate-x-0'
									leaveTo='translate-x-full'
								> */}
							<Dialog.Panel className='bg-white pointer-events-auto overflow-y-auto relative w-screen min-h-screen px-8 pt-8 pb-24'>
								<form onSubmit={handleSubmit}>
									<div className='flex flex-col gap-6'>
										<div className='relative'>
											<label htmlFor='autocomplete'>Location</label>
											<Autocomplete
												id='autocomplete'
												value={address}
												className='w-full'
												apiKey={key}
												onPlaceSelected={(place) =>
													setAddress(place.formatted_address)
												}
											/>
											<div className='absolute right-0 top-0 h-full px-3 text-gray-400 flex items-center pr'>
												<Map className='h-5 w-5' />
											</div>
										</div>
										<div className='relative'>
											<label htmlFor='datepicker'>Dates</label>
											<Datepicker
												value={date}
												placeholder={'Dates'}
												containerClassName='w-full'
												inputClassName='w-full text-base outline-none border-solid border-[1px] border-gray-200 pl-6 pr-10 h-14 rounded-full bg-white focus:border-gray-400'
												onChange={handleDateChange}
												primaryColor={'emerald'}
												useRange={false}
												// disabledDates={[
												// 	{
												// 		startDate: new Date(0).toISOString().split('T')[0],
												// 		endDate: new Date(Date.now() - 24 * 60 * 60 * 1000)
												// 			.toISOString()
												// 			.split('T')[0],
												// 	},
												// ]}
											/>
										</div>
										<div className='relative'>
											<label htmlFor='guests'>Number of Guests</label>
											<input
												className='w-full'
												type='number'
												name='guests'
												placeholder='Guests'
												id='guests'
												value={guests}
												min='1'
												onChange={handleGuestsChange}
											/>
											<div className='absolute right-0 top-0 h-full px-3 text-gray-400 flex items-center pr'>
												<Person className='h-5 w-5' />
											</div>
										</div>
										<div>
											<p className='mb-5 text-xl'>Types</p>
											<div className='grid grid-cols-2 gap-3'>
												{classes.map((item, i) => (
													<div className='relative flex gap-x-3 py-1' key={i}>
														<div className='flex h-6 items-center'>
															<input
																id={item.type}
																name={item.type}
																type='checkbox'
																className='form-checkbox h-4 w-4 rounded-full border-gray-300 checked:bg-emerald-900 focus:ring-emerald-600 focus:checked:bg-emerald-900 checked:hover:bg-emerald-800'
																checked={selectedClasses[item.type] || false}
																onChange={() => handleClassesChange(item.type)}
															/>
														</div>
														<div className='text-sm leading-6'>
															<label
																htmlFor={item.type}
																className='text-gray-900 text-base static pl-0'
															>
																{capitalizeEachWord(item.label)}
															</label>
														</div>
													</div>
												))}
											</div>
										</div>
										<div>
											<p className='mb-5 text-xl'>Price Range</p>
											<RangeSlider
												className='custom-range-styles'
												value={range}
												onInput={setRange}
												min={minPriceDollars}
												max={maxPriceDollars}
											/>
											<p className='mt-4'>
												{currencySymbol}
												{range[0]} - {currencySymbol}
												{range[1]}
											</p>
										</div>
										<button>Clear Filters</button>
										<button
											className='w-full h-14 bg-emerald-900 rounded-full flex justify-center items-center text-white'
											type='submit'
										>
											Apply Filters
										</button>
									</div>
								</form>
							</Dialog.Panel>
							{/* </Transition.Child> */}
						</div>
					</div>
				</div>
			</Dialog>
			{/* </Transition.Root> */}
		</div>
	);
};

export default SearchForm;
