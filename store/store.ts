import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/slices/cartSlice";
import alertSlice from "@/slices/alertSlice";

export function makeStore() {
	return configureStore({
		reducer: {
			cart: cartSlice,
			alert: alertSlice,
		},
	});
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
