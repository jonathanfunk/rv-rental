'use client';
import { createContext, useReducer, ReactNode, useEffect } from 'react';
import AppReducer from './AppReducer'; // Import the reducer function
import { InitialState, Action, VehicleType, id } from '@/lib/types';

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
	totalResults: 0,
	faves:
		typeof localStorage !== 'undefined'
			? localStorage.getItem('faves')
				? JSON.parse(localStorage.getItem('faves')!)
				: []
			: [],
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

	useEffect(() => {
		localStorage.setItem('faves', JSON.stringify(state.faves));
	}, [state.faves]);

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

	function setTotalResults(totalResults: number) {
		dispatch({
			type: 'FETCH_RESULTS',
			payload: totalResults,
		});
	}

	function deleteFave(id: id) {
		dispatch({
			type: 'DELETE_FAVE',
			payload: id,
		});
	}
	function addFave(id: id) {
		dispatch({
			type: 'ADD_FAVE',
			payload: id,
		});
	}

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
