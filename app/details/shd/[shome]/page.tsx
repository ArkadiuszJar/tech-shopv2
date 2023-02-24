import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";

type Props = {
	params: {
		shome: string;
	};
};

export default async function Product({ params }: Props) {
	async function getProducts() {
		const res = await fetch(`${process.env.BASE_URL}/api/getSmarthome`);
		if (!res.ok) {
			console.log(res);
		}
		return res.json();
	}
	const { shome } = params;
	const data = await getProducts();
	const product = data[Number(shome) - 1];

	return (
		<ItemPage
			url={product.url}
			name={product.name}
			price={product.price}
			producent={product.producent}
			id={product.id}
			prevPrice={product.prevPrice}
		>
			<ItemInfo
				comunication={product.comunication}
				resolution={product.resolution}
				type={product.type}
			/>
		</ItemPage>
	);
}
