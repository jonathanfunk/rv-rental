import { Logo } from '@/Components/Icons';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='py-8 px-36 fixed w-full'>
			<div className=' py-3 px-5 rounded-full backdrop-blur-lg bg-white bg-opacity-80 flex justify-between items-center'>
				<Link
					href='/'
					className='text-emerald-900 transition-colors hover:text-emerald-700'
				>
					<Logo className='fill-current h-20 w-20' />
				</Link>
				<nav className='flex justify-between items-center gap-8'>
					<Link
						href='/'
						className='font-semibold text-xl transition-colors hover:text-emerald-700'
					>
						Faves
					</Link>
					<Link
						href='/'
						className='font-semibold text-xl transition-colors hover:text-emerald-700'
					>
						Currency
					</Link>
					<Link
						href='/'
						className='bg-emerald-900 rounded-full py-7 px-10 text-white font-semibold text-xl transition-colors hover:bg-emerald-700'
					>
						Check Availabililty
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
