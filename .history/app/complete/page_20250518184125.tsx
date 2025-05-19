import Button from "@ui/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SomePage() {
	const router = useRouter();

	return (
		<div className='relative h-full'>
			<main className='h-full flex flex-col px-4 py-[18px] items-center'>
				{/* Title and Edit Icon Row */}
				<div className='flex justify-between items-center w-full mb-8 mt-4'>
					<h2
						className='text-3xl font-bold text-center w-full'
						style={{ color: "#2E2E30" }}
					>
						Completed!
					</h2>
					<Image
						src='/icons/addblogpost.svg'
						alt='Add Blog Post'
						width={32}
						height={32}
						className='ml-2'
					/>
				</div>

				{/* Card */}
				<div className='flex flex-col items-center bg-[#FAF9F6] rounded-xl py-8 px-6 mb-6 w-full max-w-md'>
					<h3
						className='text-2xl font-bold mb-2'
						style={{ color: "#2E2E30" }}
					>
						Day-2
					</h3>
					<p
						className='text-lg font-bold'
						style={{ color: "#2E2E30" }}
					>
						Neck Stretch
					</p>
					<Image
						src='/gif/congratulations.gif'
						alt='Add Blog Post'
						width={200}
						height={80}
						className='ml-2 mb-4'
					/>
				</div>

				{/* What's Next */}
				<div className='w-full max-w-md'>
					<p
						className='font-bold mb-2'
						style={{ color: "#2E2E30" }}
					>
						What's Next?
					</p>
					<Button
						text='Keep Going: Lower Back'
						onClick={() =>
							router.push(
								"/some-path"
							)
						}
					/>
					<Button
						text='Go to Main'
						outlined
						onClick={() =>
							router.push(
								"/some-path"
							)
						}
					/>
				</div>
			</main>
		</div>
	);
}
