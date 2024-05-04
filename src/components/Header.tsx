'use client';
import { Logo } from '@/components/Icons';
import CurrencyDropDown from './CurrencyDropDown';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='pt-8 fixed w-full z-10 px-8 lg:px-16 2xl:px-36'>
			<div className='py-3 px-5 rounded-full backdrop-blur-lg bg-white bg-opacity-80 flex justify-between items-center'>
				<Link
					href='/'
					className='text-emerald-900 transition-colors hover:text-emerald-700'
					aria-label='Home page link'
				>
					<Logo className='fill-current h-11 w-11 md:h-20 md:w-20' />
				</Link>
				<nav className='hidden justify-between items-center gap-8 lg:flex'>
					<Link className='text-xl' href='/faves'>
						Faves
					</Link>
					<CurrencyDropDown />
					<Link href='/rentals' className='btn'>
						Check Availabililty
					</Link>
				</nav>
				<MobileMenu />
			</div>
		</div>
	);
};

export default Header;
