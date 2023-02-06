const CartItemList = ({ children }: { children: React.ReactNode }) => {
	console.log(children);
	return <div className="w-full flex flex-col items-center">{children}</div>;
};

export default CartItemList;
