import Image from "next/image";
import HomeCatBanner from "@/components/homeCatBaner";
import ProductItem from "@/components/productItem";
import ProductItemSP from "@/components/productItemPhones";
import ProductItemGM from "@/components/productItemGaming";
import ProductItemAC from "@/components/productItemAccessories";
import ProductItemAU from "@/components/productItemAudio";
import ProductItemTV from "@/components/productItemTv";
import ProductItemSH from "@/components/productItemSmarthome";

async function getPc() {
	const res = await fetch(`${process.env.BASE_URL}/api/getPc`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

async function getSmartphones() {
	const res = await fetch(`${process.env.BASE_URL}/api/getPhones`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

async function getGaming() {
	const res = await fetch(`${process.env.BASE_URL}/api/getGaming`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

async function getAccessories() {
	const res = await fetch(`${process.env.BASE_URL}/api/getAccessories`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

async function getTv() {
	const res = await fetch(`${process.env.BASE_URL}/api/getTv`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

async function getAudio() {
	const res = await fetch(`${process.env.BASE_URL}/api/getAudio`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

async function getSmarthome() {
	const res = await fetch(`${process.env.BASE_URL}/api/getSmarthome`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

type Props = {
	data: any;
	producent: string;
	id: number;
	name: string;
	price: number;
	url: string;
};

export default async function Home() {
	const dataPC = await getPc();
	const dataSP = await getSmartphones();
	const dataGM = await getGaming();
	const dataAC = await getAccessories();
	const dataTV = await getTv();
	const dataAU = await getAudio();
	const dataSH = await getSmarthome();

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
				{dataPC.slice(0, 5).map((item: Props) => (
					<ProductItem
						key={item.id}
						id={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
					/>
				))}
			</div>

			<HomeCatBanner title="Smartphones" linkPath="/smartphones" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{dataSP.slice(0, 5).map((item: Props) => (
					<ProductItemSP
						key={item.id}
						id={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
					/>
				))}
			</div>

			<HomeCatBanner title="Gaming" linkPath="/gaming" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{dataGM.slice(0, 5).map((item: Props) => (
					<ProductItemGM
						key={item.id}
						id={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
					/>
				))}
			</div>

			<HomeCatBanner title="Accessories" linkPath="/accessories" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{dataAC.slice(0, 5).map((item: Props) => (
					<ProductItemAC
						key={item.id}
						id={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
					/>
				))}
			</div>

			<HomeCatBanner title="TV" linkPath="/tv" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{dataTV.slice(0, 5).map((item: Props) => (
					<ProductItemTV
						key={item.id}
						id={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
					/>
				))}
			</div>

			<HomeCatBanner title="Audio" linkPath="/audio" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{dataAU.slice(0, 5).map((item: Props) => (
					<ProductItemAU
						key={item.id}
						id={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
					/>
				))}
			</div>

			<HomeCatBanner title="Smarthome" linkPath="/smarthome" />

			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				{dataSH.slice(0, 5).map((item: Props) => (
					<ProductItemSH
						key={item.id}
						id={item.id}
						url={item.url}
						name={item.name}
						price={item.price}
						producent={item.producent}
					/>
				))}
			</div>
		</main>
	);
}
