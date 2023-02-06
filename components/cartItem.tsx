"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
	url: string;
	name: string;
	price: number;
	id: number;
};

async function deleteItem(id: number) {
	try {
		fetch(`/api/item/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (err) {
		console.log(err);
	}
}

const CartItem = ({ url, name, price, id }: Props) => {
	const [visible, setVisible] = useState("block");

	return (
		<div
			className={String.raw`flex items-center justify-between w-3/6 px-4 my-2 border-2 rounded-xl ${visible}`}
		>
			<div className="flex items-center gap-4">
				<Image src={url} width={100} height={100} alt="product image" />
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
					}}
				/>
			</div>
		</div>
	);
};

export default CartItem;
