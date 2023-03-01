export async function getProducts(url: string) {
	const res = await fetch(`${process.env.BASE_URL}/api/${url}`);
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}
