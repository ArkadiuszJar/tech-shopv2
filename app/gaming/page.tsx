import ProductItemGaming from "@/components/productItemGaming";

async function getProducts() {
	const res = await fetch(`${process.env.BASE_URL}/api/getGaming`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

type Props = {
	data: any;
	product: object;
	id: number;
	producent: string;
	name: string;
	price: number;
	url: string;
	event: any;
};

export default async function Gaming() {
	const data = await getProducts();
	return (
		<main className="flex justify-center flex-col items-center">
			<h1 className="text-xl p-4">Gaming</h1>
			<div className="flex flex-wrap w-2/3 justify-center">
				{data.map((item: Props) => (
					<ProductItemGaming
						key={item.id}
						id={item.id}
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
