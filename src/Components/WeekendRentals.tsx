import axios from 'axios';
import WeekendRentalList from './WeekendRentalList';
import { getNextFriday, getNextSunday } from '@/lib/utils';

export default async function WeekendRentals({
	currency,
}: {
	currency: string;
}) {
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_SEARCH_URL;

	const params = {
		'page[limit]': 6,
		recommended: true,
		instant_book: true,
		'filter[keywords]': 'Top rated',
		'date[from]': getNextFriday(),
		'date[to]': getNextSunday(),
		currency,
		include_unavailable: false,
	};

	const response = await axios.get(`${BASE_URL}/rentals`, {
		params,
	});
	const rentals = response.data.data;

	return (
		<section className='section lg:flex lg:items-center'>
			<div className='text-center mb-20 px-8 md:px-16 lg:md-0 lg:text-left lg:w-1/3 2xl:pl-36 2xl:pr-28'>
				<h2 className='mb-3 text-5xl 2xl:text-6xl lg:text-left'>
					Book an RV {` `}
					<br className='hidden 2xl:block' />
					This Weekend!
				</h2>
				<p>Instantly book with one of these highly rated RVs in your area!</p>
			</div>
			<WeekendRentalList rentals={rentals} />
		</section>
	);
}
