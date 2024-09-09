import {projects} from '../../data/projects';
import { IconArrowUpRight } from '@tabler/icons-react';

export default function Project () {
	return (
		<section id='projects' className='h-screen flex flex-col justify-center items-center gap-y-4 '>
			<div className='title'>Projects</div>
			{projects.map((project, index) => (
				<article key={index} className='article-card hover:shadow-coralblue'>
					<img 
						alt='' 
						src={project.project_image} 
						className='h-56 w-full object-cover'
					/>
					<div className='bg-white p-4 sm:p-6'>
						<a href={project.link} target='_blank' className='group' >
							<h3 className='mt-0.5 text-lg font-medium text-galaxyblack underline hover:text-greenpea flex flex-row'>{project.name}<IconArrowUpRight className='w-4 link-icon'/></h3>
						</a>
						<p className='mt-2 line-clamp-4 text-sm/relaxed text-gray-500 overflow-auto'>{project.description}</p>
						<div className='flex flex-wrap gap-1 '>
							{project.skills && project.skills.map((skill, skillIndex) => (
								<div className='techStack-list' key={skillIndex}>
									<p>{skill}</p>
								</div>
							))}
						</div>
					</div>
				</article>
			))}
		</section>
	)
}