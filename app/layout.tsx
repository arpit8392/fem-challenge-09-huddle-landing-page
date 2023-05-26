import Header from '@/components/Header'
import './globals.css'
import { Poppins, Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '600'],
	variable: '--font-poppins',
})

const open_sans = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400'],
	variable: '--font-open-sans',
})

export const metadata = {
	title: 'Huddle Landing Page',
	description:
		'Frontend Mentor Challenge | Huddle Landing Page | Developed using Next JS, Tailwind CSS, Heroicons and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.variable} ${open_sans.variable} min-h-screen overflow-auto scroll-smooth bg-violet bg-mobile bg-contain bg-no-repeat p-9 font-sans text-white md:overflow-hidden md:bg-desktop  md:px-20 md:py-16`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
