import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/context/GlobalState';
import { PaginationProps } from '@/lib/types';

const Pagination = ({
	pageLimit,
	currentPage,
	onSetPagination,
}: PaginationProps) => {
	const { state } = useContext(GlobalContext);
	const { totalResults } = state;
	const totalPages = Math.ceil(totalResults / pageLimit);
	const router = useRouter();

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			onSetPagination({
				currentPage: currentPage + 1,
			});
			router.push('#rental-list');
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			onSetPagination({
				currentPage: currentPage - 1,
			});
			router.push('#rental-list');
		}
	};

	const startRange = (currentPage - 1) * 12 + 1;

	const endRange = Math.min(currentPage * pageLimit, totalResults);

	return (
		<>
			{totalResults > 0 ? (
				<div className='py-3 md:flex md:justify-between text-base'>
					<p className=' text-center mb-3 md:mb-0 md:text-left'>
						Showing {startRange} to {endRange} of {totalResults}
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
			) : (
				''
			)}
		</>
	);
};

export default Pagination;
