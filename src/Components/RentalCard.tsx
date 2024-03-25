import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';

interface RentalCard {
	title: string;
	type: string;
	sleeps: number;
	city: string;
	state: string;
	price: number;
	score: number;
	image: string;
}

const RentalCard = ({
	title,
	type,
	sleeps,
	city,
	state,
	price,
	image,
	score,
}: RentalCard) => {
	const imageUrl = image.replace(
		'/outdoorsy/image/upload',
		'/outdoorsy/image/upload/a_exif,q_auto,f_auto,w_auto,h_320,w_500,c_fill'
	);

	const priceInDollars = Math.round(price / 100);

	return (
		<div className='w-[calc(100%-12px)] md:w-[500px] min-h-[calc(100%-12px)] rounded-[40px] border-solid border-2 border-emerald-950 shadow-solid overflow-hidden mr-8 mb-3'>
			<div className='h-[225px] md:h-[320px] bg-emerald-950'>
				<Image src={imageUrl} width={500} height={320} alt={title} />
			</div>
			<div className='p-10'>
				<h3 className='text-gray-900 text-3xl font-semibold mb-4'>{title}</h3>
				<p className='mb-4'>
					{type} • Sleeps {sleeps}
					<br />
					{city}, {state}
				</p>
				<div className='flex justify-between text-gray-900 font-semibold text-2xl md:text-3xl'>
					<p>${priceInDollars} / Night</p>
					<p className='flex'>
						<FaStar className='text-yellow-400 mr-1' />
						{score}
					</p>
				</div>
			</div>
		</div>
	);
};

export default RentalCard;
