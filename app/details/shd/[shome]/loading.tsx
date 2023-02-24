import Image from "next/image";

const Loading = () => {
	return (
		<div className="flex justify-center">
			<Image
				src="/loading-icon.svg"
				width={50}
				height={50}
				alt="loading icon"
				className="animate-spin"
			/>
		</div>
	);
};

export default Loading;
