import ProductItem from "@/components/productItem";
import Image from "next/image";
import { getProducts } from "@/adapters/api/getProducts";

type Props = {
	data: any;
	product: object;
	id: number;
	producent: string;
	name: string;
	price: number;
	url: string;
};

export default async function Smartphones() {
	const data = await getProducts("getPhones");
	if (!data) return <p>There is an error.</p>;
	if (data)
		return (
			<main className="flex justify-center flex-col items-center">
				<Image
					src={"/phonebanner.svg"}
					width={2200}
					height={100}
					alt=""
					className="lg:w-2/3 lg:my-8 lg:rounded-lg my-4"
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
							path="pd"
						/>
					))}
				</div>
			</main>
		);
}
