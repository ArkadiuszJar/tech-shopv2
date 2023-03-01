import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";
import { getProducts } from "@/adapters/api/getProducts";

type Props = {
	params: {
		shome: string;
	};
};

export default async function Product({ params }: Props) {
	const { shome } = params;
	const data = await getProducts("getSmarthome");
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
