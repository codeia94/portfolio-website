'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {

	const [text, setText] = useState<string>('');
	const [index, setIndex] = useState<number>(0);
	const [pause, setPause] = useState<boolean>(false);
	const words = useMemo<string[]>(() => [ 
		'Web Developer', 'Software Engineer', 'Front-End Developer' 
	],[]);

		useEffect(() => {
			if (!pause) {
				const interval = setInterval(() => {
					setText((prevText) => prevText + words[index].charAt(prevText.length));
					if (text === words[index]) {
						setPause(true);
						setTimeout(() => {
							setIndex((prevIndex) =>
							prevIndex === words.length - 1 ? 0 : prevIndex + 1
						);
						setText("");
						setPause(false);
						}, 2000)
					}
				}, 100);
				return () => clearInterval(interval);
			}
		}, [text, index, words, pause]);
	
  return (
		<main className='flex flex-col min-h-screen justify-center h-screen'>
			<div className='mb-4'>
				<p className='text-coin'>Hi, my name is</p>
				<div>
					<p className='text-teal font-semibold text-6xl'>Leia Ooi</p>
					<p className='text-lg font-light'>Classical Musician <span className='text-coin'>turned</span></p>
					<p className='font-semibold text-2xl min-h-10 text-smoke'>{text}<span className='text-teal'> |</span></p>
				</div>
			</div>
			<div className='flex justify-center gap-6'>
				<button>
					<a href='/leia-resume.pdf' download type="button" className='flex items-center justify-center h-9 w-32 rounded-full bg-teal text-galaxyblack p-[1.5px] group relative overflow-hidden border-2 border-teal hover:text-teal'>
						<div className='absolute inset-0 bg-galaxyblack h-full w-full flex items-center justify-center transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-linear origin-left'></div>
						<span className='relative z-10 text-base '>Résumé</span>
					</a>
				</button>
				<button >
					<Link href='#about-me' className='flex items-center justify-center h-9 w-32 rounded-full bg-galaxyblack p-[1.5px] group relative overflow-hidden border-2 border-teal hover:text-teal'>
						<div className='absolute inset-0 bg-galaxyblack h-full w-full flex items-center justify-center'></div>
						<span className='relative z-10 text-base '>About Me</span>
					</Link>
				</button>
			</div>

		</main>
  );
}


// Lets make Hello dynamic by changing it to different language (Mandarin, japanese, spanish, french ...)