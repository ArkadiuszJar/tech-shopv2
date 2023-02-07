import ItemLoader from "@/components/itemLoader";

export default function Loading() {
	return (
		<main className="flex justify-center flex-col items-center">
			<h1 className="text-xl p-4">TV</h1>
			<div className="flex flex-wrap w-2/3 justify-center">
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
				<ItemLoader />
			</div>
		</main>
	);
}
