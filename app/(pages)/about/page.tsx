export default function About () {
	return (
		<section id='about-me'className='min-h-screen h-screen flex flex-col justify-center items-center '>
			<h1 className='title'>About me</h1>
			<div className='text-lg text-center content'>
				<p className='pb-6'><span className='font-medium'>Music and coding</span> — what&apos;s the difference? They&apos;re both about using your fingers to create something extraordinary. While music produces sound that resonates with the soul, coding crafts visual experiences that captivate the eyes. For me, it&apos;s just a different instrument, and the output is no less <span>magical</span>.</p>
				<p className='pb-6'>After a decade in the music industry, I discovered a new passion in software engineering when I stumbled upon the magical world of web development. I decided to dive into 
				<a href='https://www.theodinproject.com/' target='_blank'className='text-white font-normal hover:text-teal'> The Odin Project </a>and soon found myself tumbling headfirst into the rabbit hole of coding.</p>
				<p>When I&apos;m not at my computer, I like to spend my time with my husband and
					<span className='group relative text-teal font-light'>
						<span className='group-hover:hidden'> my dog</span>
						<span className='hidden group-hover:inline'> Kira</span>
					</span>
					, watching movies, playing video games and the piano.</p>
			</div>
		</section>
	)
}