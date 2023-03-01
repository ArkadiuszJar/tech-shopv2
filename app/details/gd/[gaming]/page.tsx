import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";
import { getProducts } from "@/adapters/api/getProducts";

type Props = {
	params: {
		gaming: string;
	};
};

export default async function Product({ params }: Props) {
	const { gaming } = params;
	const data = await getProducts("getGaming");
	const product = data[Number(gaming) - 1];

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
				type={product.type}
				cpu={product.cpu}
				disc={product.disc}
				ram={product.ram}
				screen={product.screen}
			/>
		</ItemPage>
	);
}
