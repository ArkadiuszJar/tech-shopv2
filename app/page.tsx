import Image from "next/image";
import HomeCatBanner from "@/components/homeCatBaner";
import HomeItemList from "@/components/homeItemList";

export default function Home() {
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

			<HomeItemList url="/api/getPc" path="pcd" />

			<HomeCatBanner title="Smartphones" linkPath="/smartphones" />

			<HomeItemList url="/api/getPhones" path="pd" />

			<HomeCatBanner title="Gaming" linkPath="/gaming" />

			<HomeItemList url="/api/getGaming" path="gd" />

			<HomeCatBanner title="Accessories" linkPath="/accessories" />

			<HomeItemList url="/api/getAccessories" path="ad" />

			<HomeCatBanner title="TV" linkPath="/tv" />

			<HomeItemList url="/api/getTv" path="td" />

			<HomeCatBanner title="Audio" linkPath="/audio" />

			<HomeItemList url="/api/getAudio" path="aod" />

			<HomeCatBanner title="Smarthome" linkPath="/smarthome" />

			<HomeItemList url="/api/getSmarthome" path="shd" />
		</main>
	);
}
