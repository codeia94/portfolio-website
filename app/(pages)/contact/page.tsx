import { IconBrandGithub, IconBrandLinkedin, IconAt } from '@tabler/icons-react';

export default function Contact () {
	return (
		<section id='contact' className='min-h-screen h-screen flex flex-col justify-center items-center '>
			<div className='title'>Let's connect</div>
			<div className='text-sm text-center content'>
				<p className='pb-4'>Interested in working together? Feel free to reach out to me</p>
			</div>
			<div className='flex space-x-6'>	
				<a href='https://github.com/codeia94' target='_blank'>
					<IconBrandGithub className='contact-icons hover:stroke-teal'/>
				</a>
				<a href='https://www.linkedin.com/in/leiaooi1994/' target='_blank'>
					<IconBrandLinkedin className='contact-icons hover:stroke-teal'/>
				</a>
				<a href='mailto:leiaooi.94@gmail.com'>
					<IconAt className='contact-icons hover:stroke-teal' />
				</a>
			</div>
		</section>
	)
}