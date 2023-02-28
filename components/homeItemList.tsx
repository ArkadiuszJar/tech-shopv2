"use client";

import { useFetch } from "usehooks-ts";
import ProductItem from "./productItem";
import HomeLoader from "./homeLoader";

interface Post {
	data: any;
	producent: string;
	id: number;
	name: string;
	price: number;
	url: string;
}

export default function HomeItemList({
	url,
	path,
}: {
	url: string;
	path: string;
}) {
	const { data, error } = useFetch<Post[]>(url);
	if (error) return <p>There is an error.</p>;
	if (!data) return <HomeLoader />;
	return (
		<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
			{data.slice(0, 5).map((item) => (
				<ProductItem
					key={item.id}
					id={item.id}
					url={item.url}
					name={item.name}
					price={item.price}
					producent={item.producent}
					path={path}
				/>
			))}
		</div>
	);
}
