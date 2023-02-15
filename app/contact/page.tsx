"use client";

export default function Contact() {
	return (
		<main className="flex justify-center flex-col items-center">
			<p className="w-5/12 my-4 text-justify bg-gray-800 text-white text-lg p-4 rounded-lg">
				Thank you for your interest in contacting us. We value your feedback and
				suggestions, and we would love to hear from you.
			</p>
			<form
				action="https://formsubmit.co/arek.aaf@gmail.com"
				method="post"
				className="flex-col flex gap-2 w-1/3"
			>
				<label htmlFor="title" className="font-semibold">
					Title
				</label>
				<input
					type="text"
					required
					name="title"
					id="name"
					className="border-2 p-1 rounded-md active:border-blue-600 focus:border-blue-600 active:outline-none focus:outline-none"
				/>
				<label htmlFor="email" className="font-semibold">
					Email
				</label>
				<input
					type="email"
					required
					name="email"
					pattern="[^ @]*@[^ @]*"
					id="email"
					className="border-2 p-1 rounded-md active:border-blue-600 focus:border-blue-600 active:outline-none focus:outline-none"
				/>
				<label htmlFor="message" className="font-semibold">
					Message
				</label>
				<textarea
					name="message"
					required
					id="message"
					cols={30}
					rows={6}
					className="border-2 p-1 rounded-md active:border-blue-600 focus:border-blue-600 active:outline-none focus:outline-none"
				/>
				<button
					type="submit"
					className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-800 transition-all  duration-75"
				>
					Submit
				</button>
			</form>
		</main>
	);
}
