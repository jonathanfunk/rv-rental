import { Logo } from '@/components/Icons';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='py-8 fixed w-full z-10 px-8 lg:px-16 2xl:px-36'>
			<div className='py-3 px-5 rounded-full backdrop-blur-lg bg-white bg-opacity-80 flex justify-between items-center'>
				<Link
					href='/'
					className='text-emerald-900 transition-colors hover:text-emerald-700'
				>
					<Logo className='fill-current h-11 w-11 md:h-20 md:w-20' />
				</Link>
				<nav className='hidden justify-between items-center gap-8 md:flex'>
					<Link
						href='/'
						className='font-semibold text-lg lg:text-xl transition-colors hover:text-emerald-700'
					>
						Faves
					</Link>
					<Link
						href='/'
						className='font-semibold text-lg lg:text-xl transition-colors hover:text-emerald-700'
					>
						Currency
					</Link>
					<Link
						href='/'
						className='bg-emerald-900 rounded-full py-7 px-10 text-white font-semibold text-lg lg:text-xl transition-colors hover:bg-emerald-700'
					>
						Check Availabililty
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
