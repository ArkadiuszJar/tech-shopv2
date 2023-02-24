import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const itemId = req.query.id;

	if (req.method === "DELETE") {
		await prisma.cart.delete({
			where: {
				id: Number(itemId),
			},
		});
	} else {
		console.log("Error");
	}
}
