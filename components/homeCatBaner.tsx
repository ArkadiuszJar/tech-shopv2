import Link from "next/link";

export default function HomeCatBanner({
	title,
	linkPath,
}: {
	title: string;
	linkPath: string;
}) {
	return (
		<div className="w-2/3">
			<Link href={linkPath}>
				<p className="py-3 my-4 bg-gray-800 text-white text-center rounded-md">
					{title}
				</p>
			</Link>
		</div>
	);
}
