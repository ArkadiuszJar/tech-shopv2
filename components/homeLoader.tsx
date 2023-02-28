import ItemLoader from "./itemLoader";

const HomeLoader = () => {
	return (
		<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
			{Array(5)
				.fill(0)
				.map(() => (
					<ItemLoader key={1} />
				))}
		</div>
	);
};

export default HomeLoader;
