import StackIcon from "tech-stack-icons"

export default function Skills () {

	const techStacks = ['html5', 'css3', 'js', 'nextjs',  'sass', 'heroku', 'aws', 'typescipt', 'tailwindcss', 'reactjs', 'mysql', 'nodejs', 'postman', 'jira','github', 'git'];
	return (
		<section id='skills'className='min-h-screen h-screen flex flex-col justify-center items-center '>
			<h1 className='title'>Tech Stacks</h1>
			<div>
				{techStacks.map((techStack) => (
					<StackIcon className='' key={techStack} name={techStack} />
				))}
			</div>
		</section>
	)
}