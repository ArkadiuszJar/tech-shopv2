import Image from "next/image";

const ItemLoader = () => {
	return (
		<div className="w-44 h-64 m-2 rounded-lg border-black bg-slate-200 border-2 flex justify-center items-center">
			<Image
				src="/loading-icon.svg"
				width={30}
				height={60}
				alt="loading icon"
				className="animate-spin"
			/>
		</div>
	);
};

export default ItemLoader;
