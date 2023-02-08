import ProductItemSmarthome from "@/components/productItemSmarthome";

async function getProducts() {
	const res = await fetch(`${process.env.BASE_URL}/api/getSmarthome`);
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
};

export default async function Smarthome() {
	const data = await getProducts();
	return (
		<main className="flex justify-center flex-col items-center">
			<h1 className="text-xl p-4">Smarthome</h1>
			<div className="flex flex-wrap w-2/3 justify-center">
				{data.map((item: Props) => (
					<ProductItemSmarthome
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
