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
}

export type Action = { type: 'SET_CURRENCY'; payload: string };
