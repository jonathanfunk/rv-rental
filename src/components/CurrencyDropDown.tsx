import { Fragment, useContext } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { GlobalContext } from '@/context/GlobalState';
import { getCurrencySymbol } from '@/lib/utils';
import currencies from '@/data/currencyOptions';

const CurrencyDropDown = () => {
	const { state, dispatch } = useContext(GlobalContext);
	const { currency } = state;
	const setCurrency = (currency: string) =>
		dispatch({ type: 'SET_CURRENCY', payload: currency });
	return (
		<Menu as='div' className='relative ml-3'>
			<div>
				<Menu.Button
					className='relative text-xl focus:outline-none flex items-center gap-x-1'
					aria-label='Open user menu'
					aria-haspopup='true'
					aria-expanded='false'
				>
					<span className='absolute -inset-1.5' />
					<span className='sr-only'>Open user menu</span>
					{getCurrencySymbol(currency)}
					{currency}
					<ChevronDownIcon
						className='h-5 w-5 flex-none text-gray-400'
						aria-hidden='true'
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:right-0'>
					{currencies.map((currency, i) => (
						<Menu.Item key={i}>
							<button
								className='block text-left px-4 py-2 text-sm hover:bg-gray-100 w-full'
								onClick={() => setCurrency(currency.name)}
							>
								{currency.symbol}
								{currency.name}
							</button>
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default CurrencyDropDown;
