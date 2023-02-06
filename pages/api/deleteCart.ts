import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.body;
	try {
		await prisma.cart.delete({
			where: {
				id,
			},
		});
		res.status(200).json({ message: "Deleted from cart" });
	} catch (error) {
		console.log(error);
	}
}
