import ItemPage from "@/components/layouts/layout";
import ItemInfo from "@/components/itemInfo";
import { getProducts } from "@/adapters/api/getProducts";

type Props = {
	params: {
		audio: string;
	};
};

export default async function Product({ params }: Props) {
	const { audio } = params;
	const data = await getProducts("getAudio");
	const product = data[Number(audio) - 1];

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
				microphone={product.microphone}
				anc={product.anc}
			/>
		</ItemPage>
	);
}
