'use client';

export default function HomePage() {
  return (
		<main className='text-2xl flex flex-col min-h-screen justify-center text-center h-screen'>
			<div className='mb-4'>
				<p>Hello, I&apos;m <span className='text-teal font-semibold'>Leia</span>.</p>
				<p className='text-lg'>Full stack / Frontend Web Developer</p>
			</div>
			<div className='flex justify-center'>
				<a href='/resume.pdf' download type="button" className='flex items-center justify-center h-9 w-32 rounded-full bg-galaxyblack text-white p-[1.5px] group relative overflow-hidden border-2 border-teal hover:text-galaxyblack'>
					<div className='absolute inset-0 bg-teal h-full w-full flex items-center justify-center transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-linear origin-left'></div>
					<span className='relative z-10 text-base '>Résumé</span>
				</a>
			</div>
			<div></div>
		</main>
  );
}


// Lets make Hello dynamic by changing it to different language (Mandarin, japanese, spanish, french ...)