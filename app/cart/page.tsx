"use client";

import CartItem from "@/components/cartItem";
import TotalCost from "@/components/totalCost";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchCartData } from "@/slices/cartSlice";
import { useEffect, useRef } from "react";
import { AppDispatch, RootState } from "@/store/store";

export default function Cart() {
	const cartRef = useRef(false);
	const { entities, totalPrice } = useSelector(
		(state: RootState) => state.cart
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (cartRef.current === false) {
			dispatch(fetchCartData());
		}
		cartRef.current = true;
	}, []);

	return (
		<div className="flex items-center flex-col">
			<h1 className="text-2xl mt-4">Your cart</h1>
			{entities?.map((product: any) => {
				return <CartItem key={product.id} {...product} />;
			})}
			<TotalCost price={totalPrice} />
		</div>
	);
}
