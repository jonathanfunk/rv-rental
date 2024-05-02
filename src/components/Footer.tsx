const Footer = () => {
	return (
		<footer className='p-3 bg-emerald-900 text-white text-center text-l'>
			Designed & Developed by{' '}
			<a
				href='https://www.jonathanfunk.ca'
				target='_blank'
				rel='noreferrer nofollow'
				className=' text-emerald-200 hover:text-emerald-50 transition-colors'
			>
				Jonathan Funk
			</a>
			.{' '}
			<a
				href='https://github.com/jonathanfunk/rv-rental'
				target='_blank'
				rel='noreferrer nofollow'
				className=' text-emerald-200 hover:text-emerald-50 transition-colors'
			>
				Project Repo
			</a>
			.
		</footer>
	);
};

export default Footer;
