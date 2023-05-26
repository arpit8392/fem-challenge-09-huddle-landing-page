import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faFacebook, faTwitter, faInstagram)

const icons = [faFacebook, faTwitter, faInstagram]

const Footer = () => {
	return (
		<footer className='flex justify-center space-x-3 md:justify-end md:space-x-4'>
			{icons.map((item, i) => (
				<div
					className='group flex h-10 w-10 items-center justify-center rounded-full border-2 border-white hover:border-softMagenta'
					key={i}>
					<FontAwesomeIcon
						icon={item}
						className='h-5 w-5 group-hover:cursor-pointer group-hover:text-softMagenta'
					/>
				</div>
			))}
		</footer>
	)
}
export default Footer
