'use client';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
	children: React.ReactNode;
};

const Carousel = ({ children }: Props) => {
	const [emblaRef] = useEmblaCarousel();
	return (
		<div
			className=' px-8 lg:px-0 lg:w-2/3 overflow-hidden min-w-0'
			ref={emblaRef}
		>
			<div className='flex'>{children}</div>
		</div>
	);
};

export default Carousel;
