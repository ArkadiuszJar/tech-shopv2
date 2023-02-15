import Image from "next/image";
import DetailsAddCartBtn from "@/components/detailsAddCartBtn";

type Props = {
	params: {
		phones: string;
	};
};

export default async function Product({ params }: Props) {
	async function getProducts() {
		const res = await fetch(`${process.env.BASE_URL}/api/getPhones`);
		if (!res.ok) {
			console.log(res);
		}
		return res.json();
	}
	const { phones } = params;
	const data = await getProducts();
	const product = data[Number(phones) - 1];

	return (
		<div>
			<div className="flex justify-center">
				<div className="flex flex-wrap justify-center w-7/12">
					<Image
						src={product.url}
						width={550}
						height={500}
						alt={product.name}
						className="w-8/12"
					/>
					<div className="grow">
						<div className="flex flex-col items-center">
							<h1 className="text-2xl font-medium">{product.name}</h1>
							<p className="text-sm mb-4">Producent: {product.producent}</p>
						</div>
						<div className="flex justify-between py-6 px-4 mb-2 border-2 rounded-xl">
							<div className="flex flex-col justify-between py-2 font-semibold gap-2">
								<p className="text-xs">CPU: {product.cpu}</p>
								<p className="text-xs">GPU: {product.gpu}</p>
								<p className="text-xs">RAM: {product.ram} GB</p>
								{product.screen ? (
									<p className="text-xs">Screen: {product.screen} '</p>
								) : null}
							</div>
							<div className="items-end gap-4 flex flex-col ">
								<div className="flex items-center gap-2">
									<p className="text-sm line-through opacity-70">
										{product.prevPrice}.00$
									</p>
									<p className="text-2xl">{product.price}.00 $</p>
								</div>
								<DetailsAddCartBtn
									url={product.url}
									name={product.name}
									price={product.price}
									producent={product.producent}
									id={product.id}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
