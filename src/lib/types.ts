export type AddressObject = {
	formatted_address: string;
};

export type Address = string | null;

export type DateType = string | null | Date;

export type DateRange = {
	startDate: DateType;
	endDate: DateType;
};

export type PriceRange = [number, number];

export type RentalData = {
	id: string | number;
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

export type WeekendRentalListProps = {
	rentals: RentalData[];
};

export type RentalCardProps = {
	id: string | number;
	title: string;
	startDate: DateType;
	endDate: DateType;
	type: string;
	sleeps: number;
	city: string;
	state: string;
	price: number;
	score: number;
	image: string;
	currency: string;
	classes?: string;
};

export type RentalListProps = {
	address: Address;
	startDate: DateType;
	endDate: DateType;
	guests: string;
	types: string;
	offset: number;
	minPrice: number | null;
	maxPrice: number | null;
};

export type AutoCompleteProps = {
	defaultAddress: string;
	handlePlaceSelected: (place: string) => void;
};

export type paginationData = {
	currentPage: number;
};

export type PaginationProps = {
	pageLimit: number;
	currentPage: number;
	onSetPagination: (data: paginationData) => void;
};

export type SearchData = {
	address: Address;
	date: {
		startDate: DateType;
		endDate: DateType;
	};
	guests: string;
	range: PriceRange;
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
	defaultType: string;
};

export type InitialState = {
	currency: string;
	classes: VehicleType[];
	minPrice: number;
	maxPrice: number;
	totalResults: number;
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
	| { type: 'FETCH_MAX_PRICE'; payload: number }
	| { type: 'FETCH_RESULTS'; payload: number };
