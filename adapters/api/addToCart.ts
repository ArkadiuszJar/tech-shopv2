type Props = {
	producent: string;
	url: string;
	name: string;
	price: number;
	id: number;
	path?: string;
};

async function create(data: Props) {
	try {
		await fetch(`/api/addCart`, {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});
	} catch (err) {
		console.log(err);
	}
}

export const addToCart = async (data: Props) => {
	await create(data);
};
