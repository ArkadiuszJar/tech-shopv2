import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { producent, name, price, url } = req.body;
	try {
		await prisma.cart.create({
			data: {
				producent,
				name,
				price,
				url,
			},
		});
		res.status(200).json({ message: "Added to cart" });
	} catch (error) {
		console.log(error);
	}
}
