import type { Metadata } from 'next';
import Image from 'next/image';
import rvRentalFavesHeroBg from '../../../public/images/rv-rental-faves-hero-bg.webp';
import FavesListContent from '@/components/FavesListContent';

export const metadata: Metadata = {
	title: 'Faves | RV Rentals',
	description: 'Discover Your Dream RV Rental!',
	openGraph: {
		title: 'Faves | RV Rentals',
		description: 'Discover Your Dream RV Rental!',
		url: 'https://rvrental.jonathanfunk.ca',
		siteName: 'Faves | RV Rentals',
		images: [
			{
				url: 'https://rvrental.jonathanfunk.ca/images/rv-rental-faves-hero-bg.webp',
				width: 600,
				height: 300,
			},
		],
		locale: 'en_CA',
		type: 'website',
	},
};

const Faves = () => {
	return (
		<>
			<section className='section bg-emerald-900 bg-opacity-30 relative'>
				<Image
					src={rvRentalFavesHeroBg}
					alt='RV on the road'
					fill
					sizes='100vw'
					className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
					placeholder='blur'
					priority
				/>
				<div className='px-8'>
					<h1 className='mb-0 mt-28'>Your Favourite RV Units</h1>
				</div>
			</section>
			<FavesListContent />
		</>
	);
};

export default Faves;
