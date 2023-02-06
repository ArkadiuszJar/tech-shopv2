

import ProductItem from "@/components/productItem";

async function getPc() {
	const res = await fetch(`${process.env.BASE_URL}/api/getPc`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

type Props = {
	data: any;
	item: object;
	id: number;
	producent: string;
	name: string;
	price: number;
	url: string;
};

export default async function Pc() {
	const data = await getPc();
	return (
		<main className="flex justify-center flex-col items-center">
			<h1 className="text-xl p-4">PC</h1>
			<div className="flex flex-wrap w-2/3 justify-center">
				{data.map((item: Props) => (
					<ProductItem
						key={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
					/>
				))}
			</div>
		</main>
	);
}
