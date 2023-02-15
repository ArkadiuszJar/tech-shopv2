import { useSelector } from "react-redux/es/exports";
import { RootState } from "@/store/store";

export default function Alert() {
	const { style } = useSelector((state: RootState) => state.alert);
	return (
		<div>
			<div
				className={String.raw`${style} -translate-x-1/2 fixed bottom-8 left-1/2 bg-green-600 px-6 py-3 rounded-xl animate-fade-in `}
			>
				<p className="text-white">Added to cart</p>
			</div>
		</div>
	);
}
