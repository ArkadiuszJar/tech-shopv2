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
		<nav className="py-2 flex justify-center">
			<div className="flex items-center gap-4 justify-between w-3/5">
				<Link href="/">
					<h1 className="font-semibold text-xl">TECH-KOM</h1>
				</Link>
				<div className=" rounded-full bg-blue-600 grow flex justify-between mx-8 text-white">
					<input
						type="text"
						placeholder="Find a product"
						className="px-4 py-2  rounded-full bg-blue-600 active:outline-none focus:outline-none placeholder-slate-200 grow"
					/>
					<button className="px-4 py-2 rounded-full">Search</button>
				</div>
				<div className="flex gap-4">
					<Link href="/contact">
						<button className="px-8 py-2 border-2 border-blue-800 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800">
							Contact
						</button>
					</Link>
					<Link href="/cart">
						<button className="px-8 py-2 border-2 border-blue-800 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 relative">
							Cart
							{totalItems > 0 ? (
								<p className=" rounded-full bg-green-600 px-3 py-1 absolute -right-5 -bottom-2">
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
