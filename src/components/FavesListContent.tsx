'use client';
import { useState, useContext } from 'react';
import Pagination from './Pagination';
import RentalList from './RentalList';
import { paginationData } from '@/lib/types';
import { GlobalContext } from '@/context/GlobalState';

const FavesListContent = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [offset, setOffset] = useState(0);
	const { state } = useContext(GlobalContext);
	const { faves } = state;
	const csv = faves.map((fave) => String(fave.id)).join(', ');

	const handlePaginationData = (data: paginationData) => {
		setCurrentPage(data.currentPage);
		setOffset(() => {
			const newOffset = (data.currentPage - 1) * 12 + 1;
			return newOffset;
		});
	};
	return (
		<section className='section' id='rental-list'>
			<div className='px-8 lg:px-16 2xl:px-36'>
				{faves.length ? (
					<>
						<RentalList
							offset={offset}
							startDate={null}
							endDate={null}
							ids={csv}
						/>
						<Pagination
							pageLimit={12}
							currentPage={currentPage}
							onSetPagination={handlePaginationData}
						/>
					</>
				) : (
					<p className='text-center'>
						Your favourites list is waiting for your first pick!
					</p>
				)}
			</div>
		</section>
	);
};

export default FavesListContent;
