import type { Metadata } from 'next';
import RentalListContent from '@/components/RentalListContent';
import Image from 'next/image';
import { Suspense } from 'react';
import rvRentalSearchHeroBg from '../../../public/images/rv-rental-search-hero-bg.webp';

export const metadata: Metadata = {
	title: 'Search | RV Rentals',
	description: 'Discover Your Dream RV Rental!',
	openGraph: {
		title: 'Search | RV Rentals',
		description: 'Discover Your Dream RV Rental!',
		url: 'https://rvrental.jonathanfunk.ca',
		siteName: 'Search | RV Rentals',
		images: [
			{
				url: 'https://rvrental.jonathanfunk.ca/images/rv-rental-search-hero-bg.webp',
				width: 600,
				height: 300,
			},
		],
		locale: 'en_CA',
		type: 'website',
	},
};

const Rental = () => {
	return (
		<>
			<section className='section bg-emerald-900 bg-opacity-30 relative'>
				<Image
					src={rvRentalSearchHeroBg}
					alt='RV on the road'
					fill
					sizes='100vw'
					className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
					placeholder='blur'
					priority
				/>
				<div className='px-8'>
					<h1 className='mb-0 mt-28'>Discover Your Dream RV Rental</h1>
				</div>
			</section>
			<Suspense>
				<RentalListContent />
			</Suspense>
		</>
	);
};

export default Rental;
