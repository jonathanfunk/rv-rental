import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import RVOptions from '@/components/RVOptions';
import WeekendRentals from '@/components/WeekendRentals';

export const metadata: Metadata = {
	title: 'RV Rentals',
	description: 'Find the Perfect RV for Your Ultimate Adventure!',
	openGraph: {
		title: 'RV Rentals',
		description: 'Find the Perfect RV for Your Ultimate Adventure!',
		url: 'https://www.jonathanfunk.ca',
		siteName: 'RV Rentals',
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

export default function Home() {
	return (
		<>
			<Hero />
			<HowItWorks />
			<RVOptions />
			<WeekendRentals />
		</>
	);
}
