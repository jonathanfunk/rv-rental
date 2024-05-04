import { useContext, useState } from 'react';
import { Dialog, Disclosure } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { GlobalContext } from '@/context/GlobalState';
import { getCurrencySymbol } from '@/lib/utils';
import currencies from '@/data/currencyOptions';
import Link from 'next/link';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const MobileMenu = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { state, dispatch } = useContext(GlobalContext);
	const { currency } = state;
	const setCurrency = (currency: string) =>
		dispatch({ type: 'SET_CURRENCY', payload: currency });

	return (
		<nav className='lg:hidden'>
			<div className='flex'>
				<button
					type='button'
					className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
					onClick={() => setMobileMenuOpen(true)}
				>
					<span className='sr-only'>Open main menu</span>
					<Bars3Icon className='h-6 w-6' aria-hidden='true' />
				</button>
			</div>
			<Dialog
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-8 sm:max-w-sm'>
					<div className='h-[68px] py-3 px-5 flex items-center justify-end md:h-[104px]'>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								<Link href='/faves' onClick={() => setMobileMenuOpen(false)}>
									Faves
								</Link>
								<Disclosure as='div'>
									{({ open }) => (
										<>
											<Disclosure.Button className='flex w-full items-center justify-between '>
												{getCurrencySymbol(currency)}
												{currency}
												<ChevronDownIcon
													className={classNames(
														open ? 'rotate-180' : '',
														'h-5 w-5 flex-none'
													)}
													aria-hidden='true'
												/>
											</Disclosure.Button>
											<Disclosure.Panel className='mt-2 space-y-2'>
												{currencies.map((currency, i) => (
													<Disclosure.Button
														key={i}
														as='button'
														onClick={() => setCurrency(currency.name)}
														className='block rounded-lg py-2 pl-6 pr-3 text-base'
													>
														{currency.symbol}
														{currency.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
							<div className='py-6'>
								<Link
									href='/rentals'
									className='btn block w-full px-8 py-5'
									onClick={() => setMobileMenuOpen(false)}
								>
									Check Availabililty
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</nav>
	);
};

export default MobileMenu;
