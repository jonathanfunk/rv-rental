'use client';
import Image from 'next/image';
import HeroSearchForm from './HeroSearchForm';

const Hero = () => {
	return (
		<section className='bg-emerald-900 bg-opacity-30 h-screen relative flex items-end justify-center pb-8 md:pb-28'>
			<Image
				src='/images/rv-rental-hero-bg.webp'
				alt='RV on the beach'
				fill
				sizes='100vw'
				className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
				priority
			/>
			<div className='px-8 max-w-5xl'>
				<h1>Find the Perfect RV for Your Ultimate Adventure</h1>
				<HeroSearchForm />
			</div>
		</section>
	);
};

export default Hero;
