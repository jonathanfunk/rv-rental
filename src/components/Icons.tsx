type IconsProps = {
	className?: string;
};

export const Logo = ({ className }: IconsProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 50 50'
			className={className}
		>
			<path
				fill='currentColor'
				d='M27.984 30.729c-2.251 0-4.078 1.85-4.078 4.135c0 2.284 1.828 4.137 4.078 4.137c2.252 0 4.077-1.853 4.077-4.137c.001-2.286-1.825-4.135-4.077-4.135m0 6.324c-1.195 0-2.16-.979-2.16-2.189c0-1.209.965-2.193 2.16-2.193c1.191 0 2.161.984 2.161 2.193c.001 1.21-.969 2.189-2.161 2.189m16.873-24.559C43.414 11.996 34.102 11 27.972 11c-6.129 0-16 1.009-17.461 1.441C10.36 12.485 6 13.687 6 18.414V31.03c0 .857.321 1.97.795 1.97H1v2h21.965c0-3 2.262-5.122 5.048-5.122c2.79 0 5.051 2.122 5.051 5.122h12.231C47.344 35 49 33.104 49 31.03V17.743c0-2.075-1.56-4.356-4.143-5.249m-24.821 9.879c0 .394-.281.627-.667.627h-6.583c-.389 0-.786-.148-.786-.542v-4.662c0-.392.397-.796.785-.796h6.583c.386 0 .632.404.632.796v4.662zM44 22.458c0 .394-.31.542-.7.542H28.734c-.389 0-.734-.148-.734-.542v-4.662c0-.392.345-.796.734-.796H43.3c.391 0 .7.404.7.796z'
			/>
		</svg>
	);
};

export const Map = ({ className }: IconsProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z'
			/>
		</svg>
	);
};

export const Person = ({ className }: IconsProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
			/>
		</svg>
	);
};

export const RightArrow = ({ className }: IconsProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
			/>
		</svg>
	);
};
