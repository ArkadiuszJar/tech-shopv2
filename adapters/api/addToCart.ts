type Props = {
	producent: string;
	url: string;
	name: string;
	price: number;
	id: number;
	path?: string;
};

export async function addToCart(data: Props) {
	await fetch(`/api/addCart`, {
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
	});
}
