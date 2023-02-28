import ItemLoader from "./itemLoader";

var rand = require("csprng");

const HomeLoader = () => {
	return (
		<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
			{Array(5)
				.fill(0)
				.map(() => (
					<ItemLoader key={rand(160, 36)} />
				))}
		</div>
	);
};

export default HomeLoader;
