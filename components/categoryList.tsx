import CategoryBtn from "./categoryBtn";
import Link from "next/link";

const CategoryList = () => {
	return (
		<div className="bg-gray-800 pt-2">
			<ul className="flex gap-2 justify-center flex-wrap">
				<li>
					<Link href="/pc">
						<CategoryBtn title="PC" />
					</Link>
				</li>
				<li>
					<Link href="/smartphones">
						<CategoryBtn title="Smartphones" />
					</Link>
				</li>
				<li>
					<Link href="/gaming">
						<CategoryBtn title="Gaming" />
					</Link>
				</li>
				<li>
					<Link href="/accessories">
						<CategoryBtn title="Accessories" />
					</Link>
				</li>
				<li>
					<Link href="/tv">
						<CategoryBtn title="TV" />
					</Link>
				</li>
				<li>
					<Link href="/audio">
						<CategoryBtn title="Audio" />
					</Link>
				</li>
				<li>
					<Link href="/smarthome">
						<CategoryBtn title="Smarthome" />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default CategoryList;
