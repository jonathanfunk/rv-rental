import RentalListContent from '@/components/RentalListContent';
import Image from 'next/image';

export const metadata = {
	title: 'RV Rentals | Search',
	description:
		'I create minimalistic websites that prioritize ease of use and performance. Send an email to jon.m.funk@gmail.com to get started!',
	openGraph: {
		title: 'RV Rentals | Search',
		description:
			'I create minimalistic websites that prioritize ease of use and performance. Send an email to jon.m.funk@gmail.com to get started!',
		url: 'https://www.jonathanfunk.ca',
		siteName: 'RV Rentals | Search',
		images: [
			{
				url: 'https://www.jonathanfunk.ca/images/mobile-mocks.webp',
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
					src='/images/rv-rental-search-hero-bg.webp'
					alt='RV on the road'
					fill
					sizes='100vw'
					className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
					priority
				/>
				<h1 className='mb-0 mt-28'>Discover Your Dream RV Rental</h1>
			</section>
			<RentalListContent />
		</>
	);
};

export default Rental;
