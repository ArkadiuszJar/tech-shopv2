import "./globals.css";
import Navbar from "@/components/navbar";
import CategoryList from "@/components/categoryList";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin-ext"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`${montserrat.className}`}>
				<Navbar />
				<CategoryList />
				{children}
			</body>
		</html>
	);
}
