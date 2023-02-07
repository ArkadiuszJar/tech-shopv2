import CartItem from "@/components/cartItem";

export default function Loading() {
	return (
		<div className="flex justify-center p-2 m-2 rounded-xl w-44 border-2">
			<CartItem url="" price={10} id={1} name="" />
		</div>
	);
}
