import Nav from "@/components/Nav";
import Link from "next/link";

export default function HomePage() {
	return (
		<Nav>
			<div className='mt-16 md:mt-0 text-center mx-auto p-4 md:p-8'>
				<h1 className='text-3xl md:text-4xl mb-4'>Welcome to JobSwipe</h1>
				<p className='text-base md:text-lg mb-4'>
					JobSwipe is a modern and intuitive tinder-style app designed to revolutionize the way you
					find your dream job.
				</p>
				<p className='text-base md:text-lg mb-4'>
					Private users can effortlessly swipe through job ads, while companies have the ability to
					swipe through potential candidates.
				</p>
				<p className='text-base md:text-lg mb-4'>
					When you match with a job or candidate, you unlock a chat feature to start a conversation
					directly.
				</p>
				<p className='text-base md:text-lg mb-4'>
					Customize your profile page to showcase your skills or company benefits to potential
					matches.
				</p>
				<p className='text-base md:text-lg mb-4'>
					Join JobSwipe today and let us help you connect with the perfect job opportunity or the
					ideal candidate for your company.
				</p>
				<div className='flex justify-center space-x-4 items-center'>
					<Link
						href='/user'
						className='text-white bg-indigo-500 px-8 py-4 rounded-2xl text-center font-semibold text-lg'
					>
						Private user
					</Link>
					<Link
						href='/company'
						className='text-white bg-indigo-500 px-8 py-4 rounded-2xl text-center font-semibold text-lg'
					>
						Company user
					</Link>
				</div>
			</div>
		</Nav>
	);
}
