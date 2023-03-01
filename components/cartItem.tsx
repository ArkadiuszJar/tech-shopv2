"use client";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { decrement } from "@/slices/cartSlice";
import { deleteItem } from "@/adapters/api/deleteItem";

type Props = {
	url: string;
	name: string;
	price: number;
	id: number;
};

const CartItem = ({ url, name, price, id }: Props) => {
	const [visible, setVisible] = useState("block");
	const dispatch = useDispatch();
	return (
		<div
			className={String.raw`flex items-center lg:justify-between lg:w-3/6 sm:w-11/12 w-11/12 px-4 my-2 border-2 rounded-xl ${visible} lg:flex-nowrap flex-wrap justify-center`}
		>
			<div className="flex items-center gap-4">
				<Image
					src={url}
					width={100}
					height={100}
					alt="product image"
					className="lg:w-auto w-15"
				/>
				<p className="text-xl">{name}</p>
			</div>
			<div className="flex gap-4">
				<p className="text-xl font-medium">{price}.00 $</p>
				<Image
					src="/deletefromcart.svg"
					width={22}
					height={20}
					className="cursor-pointer"
					alt="add to cart icon"
					onClick={() => {
						deleteItem(id);
						setVisible("hidden");
						dispatch(decrement(price));
					}}
				/>
			</div>
		</div>
	);
};

export default CartItem;
