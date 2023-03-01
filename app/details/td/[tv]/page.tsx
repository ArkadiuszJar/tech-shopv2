import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";
import { getProducts } from "@/adapters/api/getProducts";

type Props = {
	params: {
		tv: string;
	};
};

export default async function Product({ params }: Props) {
	const { tv } = params;
	const data = await getProducts("getTv");
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
