import Image from "next/image";

const Loading = () => {
	return (
		<div>
			<Image src="/loading.svg" width={50} height={50} alt="loading icon" />
		</div>
	);
};

export default Loading;
