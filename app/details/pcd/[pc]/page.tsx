import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";

type Props = {
	params: {
		pc: string;
	};
};

export default async function Product({ params }: Props) {
	async function getProducts() {
		const res = await fetch(`${process.env.BASE_URL}/api/getPc`);
		if (!res.ok) {
			console.log(res);
		}
		return res.json();
	}
	const { pc } = params;
	const data = await getProducts();
	const product = data[Number(pc) - 1];

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
				cpu={product.cpu}
				gpu={product.gpu}
				ram={product.ram}
				screen={product.screen}
			/>
		</ItemPage>
	);
}
