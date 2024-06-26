import rvOptions from '@/data/rvOptions';
import Link from 'next/link';
import { RightArrow } from './Icons';

const RVOptions = () => {
	return (
		<section className='section bg-gradient-to-br from-emerald-900 to-emerald-950'>
			<div className='px-8 lg:px-16 2xl:px-36 '>
				<h2 className='text-white'>Which RV Works for You?</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4'>
					{rvOptions.map((option, i) => (
						<div
							className='text-center py-11 flex flex-col gap-7 md:px-8 lg:px-11 2xl:px-20'
							key={i}
						>
							<h3 className='text-4xl font-light text-white'>{option.title}</h3>
							<p className='text-emerald-100'>{option.description}</p>
							<Link
								className='text-white group'
								href={{
									pathname: '/rentals',
									query: { types: option.link },
								}}
							>
								See Options
								<RightArrow className='ml-2 w-9 inline-block transition-transform group-hover:translate-x-1' />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RVOptions;
