export async function getProducts(url: string) {
	const res = await fetch(`${process.env.BASE_URL}/api/${url}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}
