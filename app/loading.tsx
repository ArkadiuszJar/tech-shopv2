import ItemLoader from "@/components/itemLoader";
import Image from "next/image";
import HomeCatBanner from "@/components/homeCatBaner";

export default function Loading() {
	return (
		<main className="flex justify-center flex-col items-center">
			<Image
				src="/salebanner.svg"
				width={2200}
				height={100}
				alt=""
				className="lg:w-2/3 lg:my-8 lg:rounded-lg"
			/>
			<HomeCatBanner title="Laptops and PC" linkPath="/pc" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{Array(5)
					.fill(0)
					.map((_, i) => (
						<ItemLoader key={i} />
					))}
			</div>

			<HomeCatBanner title="Smartphones" linkPath="/smartphones" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{Array(5)
					.fill(0)
					.map((_, i) => (
						<ItemLoader key={i} />
					))}
			</div>

			<HomeCatBanner title="Gaming" linkPath="/gaming" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{Array(5)
					.fill(0)
					.map((_, i) => (
						<ItemLoader key={i} />
					))}
			</div>

			<HomeCatBanner title="Accessories" linkPath="/accessories" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{Array(5)
					.fill(0)
					.map((_, i) => (
						<ItemLoader key={i} />
					))}
			</div>

			<HomeCatBanner title="TV" linkPath="/tv" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{Array(5)
					.fill(0)
					.map((_, i) => (
						<ItemLoader key={i} />
					))}
			</div>

			<HomeCatBanner title="Audio" linkPath="/audio" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{Array(5)
					.fill(0)
					.map((_, i) => (
						<ItemLoader key={i} />
					))}
			</div>

			<HomeCatBanner title="Smarthome" linkPath="/smarthome" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{Array(5)
					.fill(0)
					.map((_, i) => (
						<ItemLoader key={i} />
					))}
			</div>
		</main>
	);
}
