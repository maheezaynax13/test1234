export const initialState = {
	cart: {
		count: 0,
		subtotal: 0,
		grandTotal: 0,
	},
	profile: {
		name: '',
		image: '',
		balance: '',
		mobileNumber: '',
	},
	prop: 1,
};

type SetTypeArg<T> = T | ((val: T) => T);

type SetType<T> = (val: T | ((val: T) => T)) => void;

export type SetterType<T> = {
	[Property in keyof T as `set${Capitalize<string & Property>}`]: (
		val: T[Property] | ((val: T[Property]) => T[Property]),
	) => void;
};

export type StoreType<T> = {
	hydrate: SetType<T>;
	subscribe(cb: (val: T) => void): () => void;
	getState(): T;
};

export type ReturnStoreType<T> = StoreType<T> & SetterType<T>;

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.substring(1);

export const StoreFactory = <T extends Record<string, unknown>>(initialState: T): ReturnStoreType<T> => {
	class Store {
		private store = initialState;
		private listeners = new Map<string, (val: T) => void>();
		private isHyDrated = false;

		constructor() {
			for (const key of Object.keys(initialState)) {
				Store.prototype[`set${capitalize(key)}`] = function (this: Store, v: any | ((v: any) => any)) {
					if (typeof v === 'function') {
						this.store = { ...this.store, [key]: v(this.store[key]) };
					} else {
						this.store = { ...this.store, [key]: v };
					}
					this.notify();
				};
			}
		}

		hydrate(state: SetTypeArg<T>): void {
			if (!this.isHyDrated) {
				if (typeof state === 'function') {
					this.store = state(this.store);
				} else {
					this.store = state;
				}
				this.isHyDrated = true;
			}
		}

		subscribe(cb: (val: T) => void) {
			const rand = String(Math.random());
			this.listeners.set(rand, cb);
			return () => {
				this.unSubScribe(rand);
			};
		}

		private unSubScribe(id: string) {
			this.listeners.delete(id);
		}

		private notify() {
			this.listeners.forEach((e) => e(this.store));
		}

		getState(): T {
			return this.store;
		}
	}

	return new Store() as never;
};

export const customStore = StoreFactory(initialState);
export const customStoreTwo = StoreFactory({ name: '' });
