import { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { Map, Person } from '@/components/Icons';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Autocomplete from 'react-google-autocomplete';
import Datepicker from 'react-tailwindcss-datepicker';
import RangeSlider from 'react-range-slider-input';
import {
	Address,
	DateRange,
	PrevSelectedClasses,
	PriceRange,
} from '@/lib/types';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { getCurrencySymbol, priceInDollars } from '@/lib/utils';
import 'react-range-slider-input/dist/style.css';

const SearchForm = ({
	onSubmit,
	defaultAddress,
	defaultStartDate,
	defaultEndDate,
	defaultGuests,
}) => {
	const { state } = useContext(GlobalContext);
	const { currency, classes, minPrice, maxPrice } = state;
	const currencySymbol = getCurrencySymbol(currency);
	const [address, setAddress] = useState(defaultAddress);
	const [date, setDate] = useState<DateRange>({
		startDate: defaultStartDate,
		endDate: defaultEndDate,
	});
	const [guests, setGuests] = useState(defaultGuests);
	const [selectedClasses, setSelectedClasses] = useState<PrevSelectedClasses>(
		{}
	);
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
	}, [maxPrice, minPrice]);

	const handleDateChange = (newDate: any) => {
		setDate(newDate);
	};

	const handleClassesChange = (type: string) => {
		setSelectedClasses((prevSelectedClasses) => ({
			...prevSelectedClasses,
			[type]: !prevSelectedClasses[type],
		}));
	};

	const handleGuestsChange = (e: any) => {
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
	};

	return (
		<div className='p-5 bg-gray-50 flex justify-center items-center lg:px-10 lg:py-7'>
			<form
				className='md:flex justify-center gap-3 items-center w-full'
				onSubmit={handleSubmit}
			>
				<div className='w-2/3 flex items-center'>
					<div className='mb-4 md:mb-0 md:mr-4 relative'>
						<Autocomplete
							className='w-full'
							apiKey={key}
							defaultValue={defaultAddress}
							onPlaceSelected={(place) => setAddress(place)}
						/>
						<div className='absolute right-0 top-0 h-full px-3 text-gray-400 flex items-center pr'>
							<Map className='h-5 w-5' />
						</div>
					</div>
					<Datepicker
						value={date}
						placeholder={'Dates'}
						containerClassName='mb-4 md:mb-0 md:mr-4 relative'
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
					<div className='mb-4 md:mb-0 md:mr-4 relative'>
						<input
							className='w-full'
							type='number'
							name='guests'
							placeholder='Guests'
							id='guests'
							value={guests}
							onChange={handleGuestsChange}
						/>
						<div className='absolute right-0 top-0 h-full px-3 text-gray-400 flex items-center pr'>
							<Person className='h-5 w-5' />
						</div>
					</div>
					<Popover.Group className='hidden lg:flex lg:gap-x-12 md:mr-4'>
						<Popover className='relative'>
							<Popover.Button className='flex items-center gap-x-1'>
								Types
								<ChevronDownIcon
									className='h-5 w-5 flex-none text-gray-400'
									aria-hidden='true'
								/>
							</Popover.Button>
							<Transition
								as={Fragment}
								enter='transition ease-out duration-200'
								enterFrom='opacity-0 translate-y-1'
								enterTo='opacity-100 translate-y-0'
								leave='transition ease-in duration-150'
								leaveFrom='opacity-100 translate-y-0'
								leaveTo='opacity-0 translate-y-1'
							>
								<Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
									<fieldset className='p-8'>
										<div>
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
															className='text-gray-900 text-lg'
														>
															{item.label}
														</label>
													</div>
												</div>
											))}
										</div>
									</fieldset>
								</Popover.Panel>
							</Transition>
						</Popover>
					</Popover.Group>
					<Popover.Group className='hidden lg:flex lg:gap-x-12'>
						<Popover className='relative'>
							<Popover.Button className='flex items-center gap-x-1'>
								Price Range
								<ChevronDownIcon
									className='h-5 w-5 flex-none text-gray-400'
									aria-hidden='true'
								/>
							</Popover.Button>
							<Transition
								as={Fragment}
								enter='transition ease-out duration-200'
								enterFrom='opacity-0 translate-y-1'
								enterTo='opacity-100 translate-y-0'
								leave='transition ease-in duration-150'
								leaveFrom='opacity-100 translate-y-0'
								leaveTo='opacity-0 translate-y-1'
							>
								<Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
									<fieldset className='p-8'>
										<RangeSlider
											className='custom-range-styles'
											defaultValue={[minPriceDollars, maxPriceDollars]}
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
									</fieldset>
								</Popover.Panel>
							</Transition>
						</Popover>
					</Popover.Group>
				</div>
				<div className='w-1/3 flex justify-end'>
					<button
						className='w-full md:w-14 h-14 bg-emerald-900 rounded-full flex justify-center items-center text-white'
						type='submit'
					>
						<FaMagnifyingGlass />
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
