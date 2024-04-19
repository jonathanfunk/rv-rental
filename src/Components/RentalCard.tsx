import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import { getCurrencySymbol, priceInDollars } from '@/lib/utils';
import { RentalCardProps } from '@/lib/types';

const RentalCard = ({
	id,
	title,
	type,
	sleeps,
	city,
	state,
	price,
	image,
	score,
	currency,
	startDate,
	endDate,
}: RentalCardProps) => {
	const imageUrl = image.replace(
		'/outdoorsy/image/upload',
		'/outdoorsy/image/upload/a_exif,q_auto,f_auto,w_500,h_320,c_fill'
	);

	let dateRange = '';
	if (startDate && endDate) {
		dateRange = `?from=${startDate}&to=${endDate}`;
	}

	return (
		<a
			href={`https://checkout.wheelbasepro.com/reserve/${id}${dateRange}`}
			target='_blank'
			className='w-[calc(100%-12px)] md:w-[500px] max-w-full min-h-[calc(100%-12px)] rounded-[40px] border-solid border-2 border-emerald-950 shadow-solid overflow-hidden mr-8 mb-3'
		>
			<div>
				<div className='h-[225px] md:h-[320px] bg-emerald-950 relative'>
					<Image
						src={imageUrl}
						width={500}
						height={225}
						alt={title}
						className='h-full w-full object-cover'
					/>
				</div>
				<div className='p-6 md:p-10'>
					<h3 className='text-gray-900 font-semibold mb-4 text-2xl md:text-3xl'>
						{title}
					</h3>
					<p className='mb-4'>
						{type} • Sleeps {sleeps}
						<br />
						{city}, {state}
					</p>
					<div className='flex justify-between text-gray-900 font-semibold text-xl md:text-3xl'>
						<p>
							{getCurrencySymbol(currency.toUpperCase())}
							{priceInDollars(price)} / Night
						</p>
						{score > 0 ? (
							<p className='flex'>
								<FaStar className='text-yellow-400 mr-1' />
								{score}
							</p>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</a>
	);
};

export default RentalCard;
