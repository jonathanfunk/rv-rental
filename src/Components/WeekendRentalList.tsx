import RentalCard from './RentalCard';
import Carousel from './Carousel';
import { WeekendRentalListProps } from '@/lib/types';
import { getNextFriday, getNextSunday } from '@/lib/utils';

const WeekendRentalList = ({ rentals }: WeekendRentalListProps) => {
	return (
		<Carousel>
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
					classes={'md:w-[500px] min-w-0 flex-shrink-0 flex-grow-0 w-full'}
				/>
			))}
		</Carousel>
	);
};

export default WeekendRentalList;
