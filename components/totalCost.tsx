"use client";

type Props = {
	price: number;
};

const TotalCost = ({ price }: Props) => {
	return (
		<div className="flex items-center justify-end w-3/6 px-4 my-2 border-2">
			<p className="text-xl font-medium">Total: {price}.00 $</p>
		</div>
	);
};

export default TotalCost;
