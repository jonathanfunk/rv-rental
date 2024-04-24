'use client';
import useEmblaCarousel from 'embla-carousel-react';
import RentalCard from './RentalCard';
import { WeekendRentalListProps } from '@/lib/types';
import { getNextFriday, getNextSunday } from '@/lib/utils';

const WeekendRentalList = ({ rentals }: WeekendRentalListProps) => {
	const [emblaRef] = useEmblaCarousel();
	return (
		<div
			className=' px-8 lg:px-0 lg:w-2/3 overflow-hidden min-w-0'
			ref={emblaRef}
		>
			<div className='flex'>
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
			</div>
		</div>
	);
};

export default WeekendRentalList;
