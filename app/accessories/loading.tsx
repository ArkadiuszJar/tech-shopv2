import ItemLoader from "@/components/itemLoader";
import Image from "next/image";

export default function Loading() {
	return (
		<main className="flex justify-center flex-col items-center">
			<Image
				src="/accbanner.svg"
				width={2200}
				height={100}
				alt=""
				className="lg:w-2/3 lg:my-8 lg:rounded-lg"
			/>
			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
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
