import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";

type Props = {
	params: {
		accessories: string;
	};
};

export default async function Product({ params }: Props) {
	async function getProducts() {
		const res = await fetch(`${process.env.BASE_URL}/api/getAccessories`);
		if (!res.ok) {
			console.log(res);
		}
		return res.json();
	}
	const { accessories } = params;
	const data = await getProducts();
	const product = data[Number(accessories) - 1];

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
				capacity={product.capacity}
				type={product.type}
				inter={product.interface}
				screen={product.screen}
			/>
		</ItemPage>
	);
}
