'use client';
import { createContext, useReducer, ReactNode } from 'react';
import AppReducer from './AppReducer'; // Import the reducer function
import { InitialState, Action, VehicleType } from '@/lib/types';

const initialState: InitialState = {
	currency: 'CAD',
	classes: [
		{
			type: 'truck-camper',
			label: 'Truck Camper',
			style: 'drivable',
		},
		{
			type: 'toy-hauler',
			label: 'Toy hauler',
			style: 'towable',
		},
		{
			type: 'b',
			label: 'Class B',
			style: 'drivable',
		},
		{
			type: 'c',
			label: 'Class C',
			style: 'drivable',
		},
		{
			type: 'camper-van',
			label: 'Camper van',
			style: 'drivable',
		},
		{
			type: 'fifth-wheel',
			label: 'Fifth-wheel',
			style: 'towable',
		},
		{
			type: 'folding-trailer',
			label: 'Folding trailer',
			style: 'towable',
		},
		{
			type: 'other',
			label: 'Other',
			style: 'both',
		},
		{
			type: 'tow-vehicle',
			label: 'Tow Vehicle',
			style: 'drivable',
		},
		{
			type: 'a',
			label: 'Class A',
			style: 'drivable',
		},
		{
			type: 'trailer',
			label: 'Travel trailer',
			style: 'towable',
		},
	],
	minPrice: 0,
	maxPrice: 100000,
};

// Create context
export const GlobalContext = createContext<{
	state: InitialState;
	dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

/// Provider component
export const GlobalProvider = ({
	children,
}: Readonly<{ children: ReactNode }>) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function setCurrency(currency: string) {
		dispatch({
			type: 'SET_CURRENCY',
			payload: currency,
		});
	}
	function setClasses(classes: VehicleType[]) {
		dispatch({
			type: 'FETCH_CLASSES',
			payload: classes,
		});
	}

	function setMinPrice(minPrice: number) {
		dispatch({
			type: 'FETCH_MIN_PRICE',
			payload: minPrice,
		});
	}

	function setMaxPrice(maxPrice: number) {
		dispatch({
			type: 'FETCH_MAX_PRICE',
			payload: maxPrice,
		});
	}

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
