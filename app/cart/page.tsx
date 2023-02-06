import CartItem from "@/components/cartItem";
import TotalCost from "@/components/totalCost";
import CartItemList from "@/components/cartItemList";

async function getProducts() {
	const res = await fetch(`${process.env.BASE_URL}/api/getCart`, {
		next: {
			revalidate: 1,
		},
	});
	if (!res.ok) {
		console.log(res);
	}
	return res.json();
}

type Props = {
	data: any;
	product: object;
	id: number;
	name: string;
	price: number;
	url: string;
};

export default async function Cart() {
	const data = await getProducts();

	const totalCost = data.reduce((acc: number, product: Props) => {
		return acc + product.price;
	}, 0);

	return (
		<main className="flex justify-center flex-col items-center">
			<h1 className="text-xl p-4">Cart</h1>
			<CartItemList>
				{data.map((product: Props) => (
					<CartItem key={product.id} {...product} />
				))}
			</CartItemList>
			<TotalCost price={totalCost} />
		</main>
	);
}
