import Image from "next/image";

type Props = {
	params: {
		id: string;
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
	const { id } = params;
	const data = await getProducts();
	const product = data[Number(id) - 1];

	return (
		<div>
			<div className="flex justify-center">
				<div className="flex w-10/12 my-8 p-8">
					<Image
						src={product.url}
						width={550}
						height={500}
						alt={product.name}
					/>
					<div className="grow">
						<div className="flex flex-col">
							<h1 className="text-2xl font-medium">{product.name}</h1>
							<p className="text-sm mb-4">Producent: {product.producent}</p>
						</div>
						<div className="flex justify-between py-8 px-2 ">
							<div className="flex flex-col justify-between border-t-2 border-b-2 py-2 px-4 font-semibold">
								<p className="text-xs">CPU: {product.cpu}</p>
								<p className="text-xs">GPU: {product.gpu}</p>
								<p className="text-xs">RAM: {product.ram} GB</p>
								{product.screen ? (
									<p className="text-xs">Screen: {product.screen} '</p>
								) : null}
							</div>
							<div className="items-end gap-4 flex flex-col border-2 rounded-md p-4">
								<div className="flex items-center gap-2">
									<p className="text-sm line-through opacity-70">
										{product.prevPrice}.00$
									</p>
									<p className="text-2xl">{product.price}.00 $</p>
								</div>
								<button className="px-8 py-3 rounded-full bg-green-500 text-white text-sm flex items-center gap-2">
									<Image
										src="/addcartwhite.svg"
										width={15}
										height={10}
										alt="add to cart icon"
									/>
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
