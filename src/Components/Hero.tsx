import Image from 'next/image';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Hero = () => {
	return (
		<section className='bg-emerald-900 bg-opacity-30 h-screen relative flex items-end justify-center pb-28'>
			<Image
				className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
				src='/images/rv-rental-hero-bg.webp'
				alt='Desktop Mockups'
				width={1920}
				height={1080}
				priority
			/>
			<div className='px-8 max-w-5xl'>
				<h1>Find Your Perfect RV for the Ultimate Adventure</h1>
				<div className='px-10 py-7 rounded-full backdrop-blur-lg bg-white bg-opacity-80 flex justify-center items-center'>
					<form className='flex justify-center gap-3 items-center'>
						<input type='text' name='location' id='location' />
						<input type='text' name='daterange' id='daterange' />
						<input type='text' name='guests' id='guests' />
						<button
							className=' w-14 h-14 bg-emerald-900 rounded-full flex justify-center items-center text-white'
							type='submit'
						>
							<FaMagnifyingGlass />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Hero;
