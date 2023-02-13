"use client";

type Props = {
	price: number;
};

const TotalCost = ({ price }: Props) => {
	return (
		<div className="flex items-center justify-end lg:w-3/6 sm:w-11/12 px-4 py-2 my-2 border-2 rounded-lg">
			<p className="text-xl font-medium">Total: {price}.00 $</p>
		</div>
	);
};

export default TotalCost;
