import Link from "next/link";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux/es/exports";
import { fetchCartData } from "@/slices/cartSlice";
import { useEffect, useRef } from "react";
import { AppDispatch } from "@/store/store";

const Navbar = () => {
	const cartRef = useRef(false);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (cartRef.current === false) {
			dispatch(fetchCartData());
		}
		cartRef.current = true;
	}, []);

	const { totalItems } = useSelector((state: RootState) => state.cart);
	return (
		<nav className="py-4 flex justify-center ">
			<div className="flex items-center gap-4 justify-between md:w-5/6 lg:w-2/3 sm:w-5/6">
				<Link href="/">
					<h1 className="font-semibold text-xl">TECH-KOM</h1>
				</Link>
				<div className="flex gap-4">
					<Link href="/contact">
						<button className="px-4 py-1 rounded-md border-2 text-gray-800 border-gray-700 font-medium hover:scale-105 transition-all">
							Contact
						</button>
					</Link>
					<Link href="/cart">
						<button className="px-4 py-1 rounded-md border-2 text-gray-800 border-gray-700  font-medium hover:scale-105 transition-all relative">
							Cart
							{totalItems > 0 ? (
								<p className=" rounded-full bg-green-600 px-2.5 py-1 absolute -right-5 -bottom-2 text-sm text-white">
									{totalItems}
								</p>
							) : null}
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
