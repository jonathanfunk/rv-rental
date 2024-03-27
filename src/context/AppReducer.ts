import { InitialState, Action } from '@/lib/types';

const reducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		case 'SET_CURRENCY':
			return { ...state, currency: action.payload };
		default:
			return state;
	}
};

export default reducer;
