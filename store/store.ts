import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/slices/cartSlice";


export function makeStore() {
	return configureStore({
		reducer: {
			cart: cartSlice,
		},
	});
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
