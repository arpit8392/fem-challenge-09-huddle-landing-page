import Link from 'next/link'

export default function Home() {
	return (
		<main className='relative grid grid-cols-1 gap-16 py-10 md:grid-cols-2 '>
			<figure>
				<img
					src='/images/illustration-mockups.svg'
					alt='illustration Mock Up'
				/>
			</figure>
			<section className='flex flex-col items-center space-y-4 px-4 text-center md:items-start md:text-left'>
				<h1 className='font-poppins text-2xl font-bold leading-9 tracking-wide md:text-[40px] md:leading-[60px]'>
					Build The Community Your Fans Will Love
				</h1>
				<p className='pb-2 font-sans text-base/6 font-light tracking-wide md:text-lg '>
					Huddle re-imagines the way we build communities. You have a voice, but
					so does your audience. Create connections with your users as you
					engage in genuine discussion.{' '}
				</p>
				<Link
					href={'#'}
					className='w-48 rounded-full bg-white py-3 text-center font-poppins text-xs text-violet hover:bg-softMagenta hover:text-white md:w-40 md:text-lg md:font-light'>
					Register
				</Link>
			</section>
		</main>
	)
}
