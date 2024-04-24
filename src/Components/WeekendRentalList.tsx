import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import RentalCard from './RentalCard';
import { WeekendRentalListProps } from '@/lib/types';
import { getNextFriday, getNextSunday } from '@/lib/utils';

const flickityOptions = {
	freeScroll: true,
	contain: true,
	prevNextButtons: false,
	pageDots: false,
};

const WeekendRentalList = ({ rentals }: WeekendRentalListProps) => {
	return (
		<div className=' px-8 lg:px-0 lg:w-2/3'>
			<Flickity options={flickityOptions}>
				{rentals.map((rental, i) => (
					<RentalCard
						key={i}
						id={rental.id}
						image={rental.attributes.primary_image_url}
						title={rental.attributes.vehicle_title}
						type={rental.attributes.display_vehicle_type}
						sleeps={rental.attributes.sleeps}
						city={rental.attributes.location.city}
						state={rental.attributes.location.state}
						price={rental.attributes.price_per_day}
						score={rental.attributes.score}
						currency={rental.attributes.presentment_currency}
						startDate={getNextFriday()}
						endDate={getNextSunday()}
						classes={'md:w-[500px]'}
					/>
				))}
			</Flickity>
		</div>
	);
};

export default WeekendRentalList;
