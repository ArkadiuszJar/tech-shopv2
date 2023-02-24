import ProductItem from "@/components/productItem";
import Image from "next/image";

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
			<Image
				src="/pcbanner.svg"
				width={2200}
				height={100}
				alt=""
				className="lg:w-2/3 lg:my-8 lg:rounded-lg"
			/>
			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{data.map((item: Props) => (
					<ProductItem
						key={item.id}
						id={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
						path="pcd"
					/>
				))}
			</div>
		</main>
	);
}
