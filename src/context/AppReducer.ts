import { InitialState, Action } from '@/lib/types';

const reducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		case 'SET_CURRENCY':
			return { ...state, currency: action.payload };
		case 'FETCH_CLASSES':
			return { ...state, classes: action.payload };
		case 'FETCH_MIN_PRICE':
			return { ...state, minPrice: action.payload };
		case 'FETCH_MAX_PRICE':
			return { ...state, maxPrice: action.payload };
		case 'FETCH_RESULTS':
			return { ...state, totalResults: action.payload };
		case 'DELETE_FAVE':
			return {
				...state,
				faves: state.faves.filter((fave) => fave.id !== action.payload),
			};
		case 'ADD_FAVE':
			return {
				...state,
				faves: [...state.faves, action.payload],
			};

		default:
			return state;
	}
};

export default reducer;
