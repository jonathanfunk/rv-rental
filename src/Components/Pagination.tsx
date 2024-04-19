import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { PaginationProps } from '@/lib/types';

const Pagination = ({ pageLimit, currentPageData }: PaginationProps) => {
	const { state } = useContext(GlobalContext);
	const { totalResults } = state;
	const [currentPage, setCurrentPage] = useState(1);
	const [offset, setOffset] = useState(0);
	const totalPages = Math.ceil(totalResults / pageLimit);

	useEffect(() => {
		setOffset((currentPage - 1) * pageLimit + 1);
	}, [currentPage, pageLimit]);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			currentPageData(offset + pageLimit);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			currentPageData(offset - pageLimit);
		}
	};

	const endRange = Math.min(currentPage * pageLimit, totalResults);

	return (
		<div className='py-3 flex justify-between text-base'>
			<p>
				Showing {offset} to {endRange} of {totalResults}
			</p>
			<nav className='flex justify-center gap-3'>
				<button
					onClick={handlePrevPage}
					disabled={currentPage === 1}
					className='border border-gray-200 rounded-full px-3 py-2'
				>
					Previous
				</button>
				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
					className='border border-gray-200 rounded-full px-3 py-2'
				>
					Next
				</button>
			</nav>
		</div>
	);
};

export default Pagination;
