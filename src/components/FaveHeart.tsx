import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { id } from '@/lib/types';

const FaveHeart = ({ id }: id) => {
	const [fave, setFave] = useState(false);
	const { state, dispatch } = useContext(GlobalContext);
	const { faves } = state;

	const addFave = (id: id) => dispatch({ type: 'ADD_FAVE', payload: id });
	const deleteFave = (id: string | number) =>
		dispatch({ type: 'DELETE_FAVE', payload: id });

	useEffect(() => {
		if (!faves.some((fave) => fave.id === id)) {
			setFave(false);
		} else {
			setFave(true);
		}
	}, [dispatch, faves, id]);

	const addToFaves = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const newFave = {
			id,
		};
		if (!faves.some((fave) => fave.id === id)) {
			addFave(newFave);
		} else {
			deleteFave(id);
		}
	};

	return (
		<div onClick={addToFaves}>
			{fave ? (
				<HeartIcon className=' text-red-700 hover:scale-110 transition-transform' />
			) : (
				<HeartIconOutline className='text-white hover:scale-110 transition-transform' />
			)}
		</div>
	);
};

export default FaveHeart;
