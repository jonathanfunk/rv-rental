import Image from 'next/image';

export default function Home() {
	return (
		<section className='bg-emerald-900 bg-opacity-30 h-screen relative'>
			<Image
				className='absolute top-0 left-0 w-full h-full object-cover'
				src='/images/rv-rental-hero-bg.webp'
				alt='Desktop Mockups'
				width={1920}
				height={1080}
				priority
			/>
		</section>
	);
}
