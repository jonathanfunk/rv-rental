import React, { useContext } from 'react';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import RVOptions from '@/components/RVOptions';
import WeekendRentals from '@/components/WeekendRentals';

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
