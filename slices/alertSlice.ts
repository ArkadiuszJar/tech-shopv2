import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	display: false,
	style:
		"hidden opacity-0 scale-85 bg-green-600 px-6 py-3  left-1/2 rounded-xl",
} as any;

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		show: (state) => {
			state.display = true;
			state.style = "block";
		},
		hide: (state) => {
			state.display = false;
			state.style = "hidden";
		},
	},
});

export const { show, hide } = alertSlice.actions;
export default alertSlice.reducer;
