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
		url: 'https://rvrental.jonathanfunk.ca',
		siteName: 'RV Rentals',
		images: [
			{
				url: 'https://rvrental.jonathanfunk.ca/images/rv-rental-hero-bg.webp',
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
