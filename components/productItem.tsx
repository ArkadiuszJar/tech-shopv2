"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux/es/exports";
import { increment } from "@/slices/cartSlice";
import { show, hide } from "@/slices/alertSlice";
import { addToCart } from "@/adapters/api/addToCart";
import { useAsync } from "@/hooks/useAsync";

type Props = {
	producent: string;
	url: string;
	name: string;
	price: number;
	id: number;
	path: string;
};

const ProductItem = ({ url, name, price, producent, id, path }: Props) => {
	const dispatch = useDispatch();
	const { execute: attemptAddToCart, error } = useAsync(
		() => addToCart({ producent, name, price, id, url }),
		false
	);
	if (error) {
		alert("Something went wrong");
	}
	return (
		<div className="p-2 m-2 rounded-xl w-44 border-2 border-transparent hover:border-slate-300 flex flex-col justify-between hover:scale-105 transition-all">
			<Link href={`/details/${path}/${id}`}>
				<div>
					<Image
						src={url}
						width={160}
						height={200}
						alt="product image"
						className="select-none"
					/>
					<p className="text-sm">{name}</p>
				</div>
			</Link>
			<div className="flex justify-between mt-8">
				<p>{price}.00 $</p>
				<Image
					src="/addcart.svg"
					width={22}
					height={20}
					className="cursor-pointer"
					alt="add to cart icon"
					onClick={() => {
						attemptAddToCart();
						dispatch(increment());
						dispatch(show());
						setTimeout(() => {
							dispatch(hide());
						}, 1500);
					}}
				/>
			</div>
		</div>
	);
};

export default ProductItem;
