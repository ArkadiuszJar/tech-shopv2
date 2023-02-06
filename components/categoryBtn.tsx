type Props = {
	title: string;
};

const CategoryBtn = ({ title }: Props) => {
	return (
		<div className="px-4 py-2 text-white hover:bg-white hover:rounded-t-md hover:text-blue-900">
			<p>{title}</p>
		</div>
	);
};

export default CategoryBtn;
