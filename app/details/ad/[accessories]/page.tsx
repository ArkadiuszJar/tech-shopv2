import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";
import { getProducts } from "@/adapters/api/getProducts";

type Props = {
	params: {
		accessories: string;
	};
};

export default async function Product({ params }: Props) {
	const { accessories } = params;
	const data = await getProducts("getAccessories");
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
