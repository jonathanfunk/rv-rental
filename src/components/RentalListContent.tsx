'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import SearchForm from '@/components/SearchForm';
import RentalList from '@/components/RentalList';
import Pagination from '@/components/Pagination';
import { SearchData, DateType, Address, paginationData } from '@/lib/types';

const RentalListContent = () => {
	const searchParams = useSearchParams();
	const [address, setAddress] = useState<Address | null>(null);
	const [startDate, setStartDate] = useState<DateType>('');
	const [endDate, setEndDate] = useState<DateType>('');
	const [guests, setGuests] = useState('');
	const [types, setTypes] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [minPrice, setMinPrice] = useState<number | null>(null);
	const [maxPrice, setMaxPrice] = useState<number | null>(null);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setAddress(searchParams.get('address') ?? '');
		setStartDate(searchParams.get('startdate') ?? '');
		setEndDate(searchParams.get('enddate') ?? '');
		setGuests(searchParams.get('guests') ?? '');
		setTypes(searchParams.get('types') ?? '');
	}, [searchParams]);

	const handleSearchSubmit = (searchData: SearchData) => {
		const {
			address,
			guests,
			selectedClasses,
			date: { startDate, endDate },
			range,
		} = searchData;
		console.log(range);
		setCurrentPage(1);
		setOffset(0);
		setAddress(address);
		setGuests(guests);
		setStartDate(startDate);
		setEndDate(endDate);
		setMinPrice(range[0] * 100);
		setMaxPrice(range[1] * 100);
		const selectedClassesKeys = Object.keys(selectedClasses).filter(
			(key) => selectedClasses[key]
		);
		const selectedClassesResults = selectedClassesKeys.join(',');
		setTypes(selectedClassesResults);
	};

	const handlePaginationData = (data: paginationData) => {
		setCurrentPage(data.currentPage);
		setOffset(() => {
			const newOffset = (data.currentPage - 1) * 12 + 1;
			return newOffset;
		});
	};

	return (
		<>
			<SearchForm
				onSubmit={handleSearchSubmit}
				defaultAddress={searchParams.get('address') ?? ''}
				defaultStartDate={searchParams.get('startdate') ?? ''}
				defaultEndDate={searchParams.get('enddate') ?? ''}
				defaultGuests={searchParams.get('guests') ?? ''}
			/>

			<section className='section' id='rental-list'>
				<div className='px-8 lg:px-16 2xl:px-36'>
					<RentalList
						address={address}
						startDate={startDate}
						endDate={endDate}
						guests={guests}
						types={types}
						offset={offset}
						minPrice={minPrice}
						maxPrice={maxPrice}
					/>
					<Pagination
						pageLimit={12}
						currentPage={currentPage}
						onSetPagination={handlePaginationData}
					/>
				</div>
			</section>
		</>
	);
};

export default RentalListContent;
