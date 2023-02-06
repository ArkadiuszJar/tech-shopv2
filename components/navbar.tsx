import Link from "next/link";

const Navbar = () => {
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
						<button className="px-8 py-2 border-2 border-blue-800 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800">
							Cart
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
