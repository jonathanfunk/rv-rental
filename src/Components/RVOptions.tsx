import rvOptions from '@/data/rvOptions';

const RVOptions = () => {
	return (
		<section className='section bg-gradient-to-br from-emerald-900 to-emerald-950'>
			<div className='px-8 lg:px-16 2xl:px-36'>
				<h2 className='text-white'>Which RV Works for You?</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4'>
					{rvOptions.map((option, i) => (
						<div
							className='py-11 flex flex-col gap-7 md:px-8 lg:px-11 2xl:px-20'
							key={i}
						>
							<h3 className='text-4xl font-light text-white text-center'>
								{option.title}
							</h3>
							<p className='text-emerald-100 text-center'>
								{option.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RVOptions;
