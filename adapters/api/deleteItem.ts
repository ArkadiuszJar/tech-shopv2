export async function deleteItem(id: number) {
	await fetch(`/api/item/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
}
