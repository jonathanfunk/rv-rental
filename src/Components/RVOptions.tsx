import rvOptions from '@/data/rvOptions';

const RVOptions = () => {
	return (
		<section className=' pt-36 pb-52 bg-gradient-to-br from-emerald-900 to-emerald-950'>
			<div className='px-36'>
				<h2 className='text-center text-8xl font-light text-white mb-20'>
					Which RV Works for You?
				</h2>
				<div className='grid grid-cols-4'>
					{rvOptions.map((option, i) => (
						<div className='px-20 py-11 flex flex-col gap-7' key={i}>
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
