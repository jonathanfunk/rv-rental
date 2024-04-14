export type Address = {
	formatted_address: string;
};

export type DateRange = {
	startDate: Date | null;
	endDate: Date | null;
};

export type PriceRange = [number, number];

export type Rental = {
	attributes: {
		vehicle_title: string;
		display_vehicle_type: string;
		sleeps: number;
		price_per_day: number;
		primary_image_url: string;
		score: number;
		presentment_currency: string;
		location: {
			city: string;
			state: string;
		};
	};
};

export type RentalCard = {
	title: string;
	type: string;
	sleeps: number;
	city: string;
	state: string;
	price: number;
	score: number;
	image: string;
	currency: string;
};

export type RentalList = {
	address: string | null;
	startDate: string;
	endDate: string;
	guests: string;
};

export type SearchData = {
	address: string;
	date: {
		startDate: string;
		endDate: string;
	};
	guests: string;
	range: [number, number];
	selectedClasses: {
		[className: string]: boolean;
	};
};

export type SearchProps = {
	onSubmit: (data: SearchData) => void;
	defaultAddress: string;
	defaultStartDate: string;
	defaultEndDate: string;
	defaultGuests: string;
};

export type InitialState = {
	currency: string;
	classes: VehicleType[];
	minPrice: number;
	maxPrice: number;
};

export type VehicleType = {
	type: string;
	label: string;
	style: 'drivable' | 'towable' | 'both';
};

export type PricRange = {
	type: number;
};

export type PrevSelectedClasses = {
	[key: string]: boolean;
};

export type Action =
	| { type: 'SET_CURRENCY'; payload: string }
	| { type: 'FETCH_CLASSES'; payload: VehicleType[] }
	| { type: 'FETCH_MIN_PRICE'; payload: number }
	| { type: 'FETCH_MAX_PRICE'; payload: number };
