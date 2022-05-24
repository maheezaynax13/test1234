import { useEffect, useState } from 'react';
import { ReturnStoreType } from './store';

export const useCustomStore = <T>(store: ReturnStoreType<T>): T => {
	const [x, setX] = useState(store.getState());

	useEffect(
		store.subscribe((val) => setX(val)),
		[],
	);

	return x;
};
