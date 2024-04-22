import { Fragment } from 'react';

import { Popover, Transition, Dialog } from '@headlessui/react';
import {
	ChevronDownIcon,
	AdjustmentsHorizontalIcon,
} from '@heroicons/react/20/solid';

type Props = {
	children: React.ReactNode;
	ButtonTitle: string;
};

const PopOverGroup = ({ children, ButtonTitle }: Props) => {
	return (
		<Popover.Group className='flex gap-x-12 md:mr-4'>
			<Popover className='relative'>
				<Popover.Button className='flex items-center gap-x-1'>
					{ButtonTitle}
					<ChevronDownIcon
						className='h-5 w-5 flex-none text-gray-400'
						aria-hidden='true'
					/>
				</Popover.Button>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-200'
					enterFrom='opacity-0 translate-y-1'
					enterTo='opacity-100 translate-y-0'
					leave='transition ease-in duration-150'
					leaveFrom='opacity-100 translate-y-0'
					leaveTo='opacity-0 translate-y-1'
				>
					<Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
						{children}
					</Popover.Panel>
				</Transition>
			</Popover>
		</Popover.Group>
	);
};

export default PopOverGroup;
