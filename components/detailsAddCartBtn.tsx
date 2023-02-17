"use client";

import Image from "next/image";

import { useDispatch } from "react-redux/es/exports";
import { increment } from "@/slices/cartSlice";
import { show, hide } from "@/slices/alertSlice";

type Props = {
	producent: string;
	url: string;
	name: string;
	price: number;
	id: number;
};

const DetailsAddCartBtn = ({ url, name, price, producent, id }: Props) => {
	const dispatch = useDispatch();
	async function create(data: Props) {
		try {
			await fetch(`/api/addCart`, {
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});
		} catch (err) {
			console.log(err);
		}
	}

	const addToCart = async (data: Props) => {
		try {
			create(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<button
			className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-700 transition-colors text-white text-sm flex items-center gap-2"
			onClick={() => {
				addToCart({ url, name, price, producent, id });
				dispatch(increment());
				dispatch(show());
				setTimeout(() => {
					dispatch(hide());
				}, 1500);
			}}
		>
			<Image
				src="/addcartwhite.svg"
				width={15}
				height={10}
				alt="add to cart icon"
			/>
			Add to cart
		</button>
	);
};

export default DetailsAddCartBtn;
