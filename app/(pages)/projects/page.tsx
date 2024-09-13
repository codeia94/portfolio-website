import {projects} from '../../data/projects';
import { IconArrowUpRight, IconCode } from '@tabler/icons-react';
import Image from 'next/image';

export default function Project () {
	return (
		<section id='projects' className='min-h-screen flex flex-col justify-center items-center gap-y-4 '>
			<div className='title'>Projects</div>
			{projects.map((project, index) => (
				<article key={index} className='article-card article-card-border article-card-md'>
					<div className='md:flex-1'>
						<Image  
							className='h-56 w-full object-cover md:h-full'
							src={project.project_image} 
						/>
					</div>
					<div className='bg-white p-4 sm:p-6 md:flex-1'>
						<div className='flex justify-between items-center flex-wrap'>
							<a href={project.link} target='_blank' className='group' >
								<h3 className='mt-0.5 text-lg font-medium text-galaxyblack underline hover:text-greenpea flex flex-row'>{project.name}<IconArrowUpRight className='w-4 link-icon'/></h3>
							</a>
							<div className='flex gap-2 '>
								{project.github_client && (
									<a href={project.github_client} target='_blank' className='article-repo'>
										<IconCode className='stroke-portgore w-4' />
										<h3 className='text-portgore text-sm'>client</h3>
									</a>
								)}
								{project.github_server && (
									<a href={project.github_server} target='_blank' className='article-repo'>
										<IconCode className='stroke-portgore w-4' />
										<h3 className='text-portgore text-sm'>server</h3>
									</a>
								)}
							</div>
						</div>
						<div className='article-desc-tech'>
							<p className='my-2 line-clamp-4 text-sm/relaxed text-gray-500 overflow-auto article-desc'>{project.description}</p>
							<div className='flex flex-wrap gap-1 '>
								{project.skills && project.skills.map((skill, skillIndex) => (
									<div className='techStack-list' key={skillIndex}>
										<p>{skill}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</article>
			))}
		</section>
	)
}