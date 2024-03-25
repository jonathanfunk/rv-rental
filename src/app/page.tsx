import Image from 'next/image';
import HowItWorks from '@/components/HowItWorks';
import RVOptions from '@/components/RVOptions';
import WeekendRentals from '@/components/WeekendRentals';

export default function Home() {
	return (
		<>
			<section className='bg-emerald-900 bg-opacity-30 h-screen relative'>
				<Image
					className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
					src='/images/rv-rental-hero-bg.webp'
					alt='Desktop Mockups'
					width={1920}
					height={1080}
					priority
				/>
			</section>
			<HowItWorks />
			<RVOptions />
			<WeekendRentals />
		</>
	);
}
