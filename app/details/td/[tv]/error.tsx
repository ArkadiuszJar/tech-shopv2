"use client";

import Image from "next/image";
import Link from "next/link";

export default function Error() {
	return (
		<main className="flex justify-center flex-col items-center">
			<div className="flex flex-wrap lg:w-2/3 sm:w-full justify-center">
				<div className="flex flex-col items-center justify-center">
					<p className="text-2xl font-medium mb-2">Oh Crab!</p>
					<Image src="/sadcrab.svg" width={120} height={200} alt="sad crab" />
					<p className="text-xl font-medium mb-2">Something went wrong</p>
					<p className="text-lg font-medium mb-2">Please try again later</p>
					<button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700 transition-colors">
						<Link href="/">Home Page</Link>
					</button>
				</div>
			</div>
		</main>
	);
}
