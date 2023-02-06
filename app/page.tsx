import Image from "next/image";

async function getProducts() {
	const res = await fetch(`${process.env.BASE_URL}/api/getCart`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

type Props = {
	data: any;
	product: object;
	id: number;
	name: string;
	price: number;
	url: string;
};

export default async function Home() {
	const data = await getProducts();

	return (
		<main className="flex justify-center flex-col items-center">
			<h1 className="text-xl p-4">Home</h1>
			{data.map((product: Props) => (
				<div
					key={product.id}
					className="flex items-center justify-between w-1/3"
				>
					<Image
						src={product.url}
						width={70}
						height={100}
						alt="product image"
					/>
					<p className="text-xl font-medium">{product.name}</p>
					<p>{product.price}</p>
				</div>
			))}
		</main>
	);
}
