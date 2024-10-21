// import StackIcon from "tech-stack-icons"
import { IconBrandHtml5, IconBrandCss3, IconBrandSass, IconBrandTypescript, IconBrandReact, IconBrandJavascript, IconBrandNextjs, IconBrandAws, IconBrandTailwind, IconBrandMysql, IconBrandNodejs, IconBrandGithub, IconBrandGit, IconApi, IconBrandVercel} from '@tabler/icons-react';

export default function Skills () {

	const techStacks = [
		{ icon: IconBrandHtml5, name: 'HTML5', type: 'Front-end' },
		{ icon: IconBrandCss3, name: 'CSS3', type: 'Front-end' },
		{ icon: IconBrandSass, name: 'Sass', type: 'Front-end' },
		{ icon: IconBrandTypescript, name: 'TypeScript', type: 'Front-end' },
		{ icon: IconBrandReact, name: 'React', type: 'Front-end' },
		{ icon: IconBrandJavascript, name: 'JavaScript', type: 'Front-end' },
		{ icon: IconBrandNextjs, name: 'Next.js', type: 'Back-end' },
		{ icon: IconBrandAws, name: 'AWS', type: 'Back-end' },
		{ icon: IconBrandTailwind, name: 'Tailwind', type: 'Front-end' },
		{ icon: IconBrandMysql, name: 'MySQL', type: 'Database' },
		{ icon: IconBrandNodejs, name: 'Node.js', type: 'Back-end' },
		{ icon: IconBrandGithub, name: 'GitHub', type: 'Tools' },
		{ icon: IconBrandGit, name: 'Git', type: 'Tools' },
		{ icon: IconApi, name: 'API', type: 'Back-end' },
		{ icon: IconBrandVercel, name: 'Vercel', type: 'Back-end' }
	];

	const frontEndStacks = techStacks.filter(stack => stack.type === 'Front-end');
	const backEndStacks = techStacks.filter(stack => stack.type === 'Back-end');
	const databaseStacks = techStacks.filter(stack => stack.type === 'Database');
	const toolStacks = techStacks.filter(stack => stack.type === 'Tools');
 
	return (
		<section id='skills'className='flex flex-col items-center justify-center min-h-screen'>
			<h1 className='title'>Tech Stacks</h1>
			<div className='flex w-full justify-evenly md:flex-col md:w-3/4'>
				<div className='flex flex-col md:flex-row md:items-center'>
					<h2 className='content-sub-text md:w-32 md:h-14 xs:text-lg sm:text-xl'>Frontend</h2>
					<div className='md:flex-row md:flex md:gap-6 md:pl-2'>
						{frontEndStacks.map(({ icon: TechStackIcon, name }, index) => (
							<div key={index} className='group flex flex-col items-center my-4'>
								<TechStackIcon stroke={1.5} className='techstacks-icon'/>
								<p className='techText'>{name}</p>
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-col md:flex-row md:items-center'>
					<h2 className='content-sub-text md:w-32 md:h-14 xs:text-lg sm:text-xl'>Backend</h2>
					<div className='md:flex-row md:flex md:gap-6 md:pl-2'>
						{backEndStacks.map(({ icon: TechStackIcon, name}, index) => (
							<div key={index} className='group flex flex-col items-center my-4'>
								<TechStackIcon stroke={1.5} className='techstacks-icon' />
								<p className='techText'>{name}</p>
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-col md:flex-row md:items-center'>
					<h2 className='content-sub-text md:w-32 md:h-14 xs:text-lg sm:text-xl'>Database</h2>
					<div className='md:flex-row md:flex md:gap-6 md:pl-2'>
						{databaseStacks.map(({ icon: TechStackIcon, name }, index) => (
							<div key={index} className='group flex flex-col items-center my-4'>
								<TechStackIcon stroke={1.5} className='techstacks-icon' />
								<p className='techText'>{name}</p>
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-col md:flex-row md:items-center'>
					<h2 className='content-sub-text md:w-32 md:h-14 xs:text-lg sm:text-xl'>Tools</h2>
					<div className='md:flex-row md:flex md:gap-6 md:pl-2'>
						{toolStacks.map(({ icon: TechStackIcon, name}, index) => (
							<div key={index} className='group flex flex-col items-center my-4'>
								<TechStackIcon stroke={1.5} className='techstacks-icon' />
								<p className='techText'>{name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}