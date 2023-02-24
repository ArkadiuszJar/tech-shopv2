import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";

type Props = {
	params: {
		tv: string;
	};
};

export default async function Product({ params }: Props) {
	async function getProducts() {
		const res = await fetch(`${process.env.BASE_URL}/api/getTv`);
		if (!res.ok) {
			console.log(res);
		}
		return res.json();
	}
	const { tv } = params;
	const data = await getProducts();
	const product = data[Number(tv) - 1];

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
				screen={product.screen}
				type={product.type}
				resolution={product.resolution}
			/>
		</ItemPage>
	);
}
