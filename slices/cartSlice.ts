import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartData = createAsyncThunk(
	"cart/fetchCartData",
	async (thunkAPI) => {
		const response = await fetch("/api/getCart");
		if (!response.ok) {
			throw new Error("Could not fetch cart data!");
		}
		const data = await response.json();
		return data;
	}
);

const initialState = {
	entities: [],
	totalItems: 0,
	totalPrice: 0,
	status: "loading",
} as any;

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		increment: (state) => {
			state.totalItems++;
		},
		decrement: (state, action) => {
			state.totalItems--;
			state.totalPrice -= action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCartData.fulfilled, (state, action) => {
			state.entities = [];

			state.entities.push(...action.payload);
			state.totalItems = state.entities.length;
			state.totalPrice = action.payload.reduce(
				(acc: number, item: any) => acc + item.price,
				0
			);
			state.status = "succeeded";
		});
	},
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
