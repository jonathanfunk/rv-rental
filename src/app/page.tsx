'use client';
import React, { useContext } from 'react';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import RVOptions from '@/components/RVOptions';
import WeekendRentals from '@/components/WeekendRentals';
import { GlobalContext } from '@/context/GlobalState';

export default function Home() {
	const { state } = useContext(GlobalContext);
	const { currency } = state;
	return (
		<>
			<Hero />
			<HowItWorks />
			<RVOptions />
			<WeekendRentals currency={currency} />
		</>
	);
}
