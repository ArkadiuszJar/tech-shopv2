"use client";

import CartItem from "@/components/cartItem";
import TotalCost from "@/components/totalCost";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchCartData } from "@/slices/cartSlice";
import { useEffect, useRef } from "react";
import { AppDispatch, RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

type Product = {
	id: number;
	name: string;
	price: number;
	url: string;
};

export default function Cart() {
	const cartRef = useRef(false);
	const { entities, totalPrice, totalItems, status } = useSelector(
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
		<div>
			{status === "loading" ? (
				<div className="flex justify-center">
					<Image
						src="/loading-icon.svg"
						width={70}
						height={100}
						alt="loading icon"
						className="animate-spin"
					/>
				</div>
			) : (
				<div>
					{totalItems != 0 ? (
						<div className="flex items-center flex-col">
							<p className="text-2xl mb-4">Cart</p>
							{entities?.map((product: Product) => {
								return <CartItem key={product.id} {...product} />;
							})}
							<TotalCost price={totalPrice} />
						</div>
					) : (
						<div className="flex items-center flex-col">
							<p className="text-2xl font-medium mb-2">Oh Crab!</p>
							<Image
								src="/sadcrab.svg"
								width={120}
								height={200}
								alt="sad crab image"
							/>
							<p className="text-2xl font-medium mt-2">Your cart is empty !</p>
							<button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700 transition-colors">
								<Link href="/">Home Page</Link>
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
