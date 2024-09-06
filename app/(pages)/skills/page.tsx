// import StackIcon from "tech-stack-icons"
import { IconBrandHtml5, IconBrandCss3, IconBrandSass, IconBrandTypescript, IconBrandReact, IconBrandJavascript, IconBrandNextjs, IconBrandAws, IconBrandTailwind, IconBrandMysql, IconBrandNodejs, IconBrandGithub, IconBrandGit, IconApi} from '@tabler/icons-react';

export default function Skills () {

	const techStacks = [IconBrandHtml5, IconBrandCss3, IconBrandSass, IconBrandTypescript, IconBrandReact, IconBrandJavascript, IconBrandNextjs, IconBrandAws, IconBrandTailwind, IconBrandMysql, IconBrandNodejs, IconBrandGithub, IconBrandGit, IconApi];
	return (
		<section id='skills'className='min-h-screen h-screen flex flex-col justify-center items-center '>
			<h1 className='title'>Tech Stacks</h1>
			<div className='flex flex-wrap'>
				{techStacks.map((TechStackIcon, index) => (
					<TechStackIcon stroke={1.5} className='m-2 techstacks-icon' key={index} />
				))}
			</div>
		</section>
	)
}