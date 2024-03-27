'use client';
import { createContext, useReducer, ReactNode } from 'react';
import AppReducer from './AppReducer'; // Import the reducer function
import { InitialState, Action } from '@/lib/types';

const initialState: InitialState = {
	currency: 'cad',
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

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
