// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const data = await prisma.gaming.findMany({
			orderBy: {
				id: "asc",
			},
		});
		return res.status(200).json(data);
	} catch (err) {
		return res.status(500).json(err);
	}
}
