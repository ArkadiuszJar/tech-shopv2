import ItemLoader from "./itemLoader";

const HomeLoader = () => {
	return (
		<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
			{Array(5)
				.fill(0)
				.map((i: number) => (
					<ItemLoader key={Math.random()} />
				))}
		</div>
	);
};

export default HomeLoader;
