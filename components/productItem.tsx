"use client";

import Image from "next/image";

type Props = {
	producent: string;
	url: string;
	name: string;
	price: number;
};

const ProductItem = ({ url, name, price, producent }: Props) => {
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
		<div className="p-2 m-2 rounded-xl w-44 border-2 border-transparent hover:border-slate-300 flex flex-col justify-between">
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
			<div className="flex justify-between mt-8">
				<p>{price}.00 $</p>
				<Image
					src="/addcart.svg"
					width={22}
					height={20}
					className="cursor-pointer"
					alt="add to cart icon"
					onClick={() => addToCart({ url, name, price, producent })}
				/>
			</div>
		</div>
	);
};

export default ProductItem;
