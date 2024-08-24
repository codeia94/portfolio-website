import HomePage from './home/page';
import About from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';

export default function Home() {
  return (
		<main className='px-6'>
			<HomePage />
			<About />
			<Projects />
			<Contact />
		</main>
  );
}
