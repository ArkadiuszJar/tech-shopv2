import Image from "next/image";
import DetailsAddCartBtn from "@/components/detailsAddCartBtn";

type Props = {
	url: string;
	name: string;
	price: number;
	prevPrice: number;
	producent: string;
	id: number;
	children: React.ReactNode;
};

export default function ItemPage({
	url,
	name,
	price,
	producent,
	id,
	prevPrice,
	children,
}: Props) {
	return (
		<div>
			<div className="flex justify-center">
				<div className="flex flex-wrap justify-center lg:w-6/12">
					<Image
						src={url}
						width={550}
						height={500}
						alt={name}
						className="w-8/12"
					/>
					<div className="grow">
						<div className="flex flex-col items-center">
							<h1 className="text-2xl font-medium">{name}</h1>
							<p className="text-sm mb-4">Producent: {producent}</p>
						</div>
						<div className="flex justify-between py-6 px-4 mb-2 mx-2 border-2 rounded-xl">
							{children}
							<div className="items-end gap-4 flex flex-col ">
								<div className="flex items-center gap-2">
									<p className="text-sm line-through opacity-70">
										{prevPrice}.00$
									</p>
									<p className="text-2xl">{price}.00 $</p>
								</div>
								<DetailsAddCartBtn
									url={url}
									name={name}
									price={price}
									producent={producent}
									id={id}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
