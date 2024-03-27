export interface Address {
	formatted_address: string;
}

export interface DateRange {
	startDate: Date | null;
	endDate: Date | null;
}

export type PriceRange = [number, number];

export interface Rental {
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
}

export interface RentalCard {
	title: string;
	type: string;
	sleeps: number;
	city: string;
	state: string;
	price: number;
	score: number;
	image: string;
	currency: string;
}

export interface RentalList {
	address: string;
	startDate: string;
	endDate: string;
	guests: string;
}

export interface InitialState {
	currency: string;
	classes: VehicleType[];
	minPrice: number;
	maxPrice: number;
}

export interface VehicleType {
	type: string;
	label: string;
	style: 'drivable' | 'towable' | 'both';
}

export interface PricRange {
	type: number;
}

export interface PrevSelectedClasses {
	[key: string]: boolean;
}

export type Action =
	| { type: 'SET_CURRENCY'; payload: string }
	| { type: 'FETCH_CLASSES'; payload: VehicleType[] }
	| { type: 'FETCH_MIN_PRICE'; payload: number }
	| { type: 'FETCH_MAX_PRICE'; payload: number };
