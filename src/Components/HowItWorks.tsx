import { FaMapLocation, FaCaravan, FaCreditCard } from 'react-icons/fa6';

const HowItWorks = () => {
	const steps = [
		{
			icon: <FaMapLocation className=' text-2xl text-white' />,
			title: 'Plan your Journey',
			description: 'Specify Your Destination, Trip Dates, and Group Size',
		},
		{
			icon: <FaCaravan className=' text-2xl text-white' />,
			title: 'Choose Your Ride',
			description: 'Explore Our RV Collection and Select the Perfect Fit',
		},
		{
			icon: <FaCreditCard className=' text-2xl text-white' />,
			title: 'Checkout',
			description: 'Provide Your Information and Payment Details',
		},
	];
	return (
		<section className='pt-36 pb-52'>
			<div className='px-36'>
				<h2 className='text-center text-8xl font-light text-gray-900 mb-20'>
					How it Works
				</h2>
				<div className='grid grid-cols-3 gap-8'>
					{steps.map((step, i) => (
						<div
							className='px-20 py-11 rounded-[40px] border-2 border-emerald-950 shadow-solid flex flex-col gap-7'
							key={i}
						>
							<div className=' h-20 w-20 bg-emerald-900 flex justify-center items-center rounded-full'>
								{step.icon}
							</div>

							<h3 className='text-4xl font-light text-gray-900'>
								{step.title}
							</h3>
							<p>{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
