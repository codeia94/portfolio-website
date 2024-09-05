import HomePage from './home/page';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Contact from './contact/page';
import NavBar from '../components/NavBar/NavBar';

export default function Home() {
  return (
		<>
			<NavBar />
			<main className='px-6'>
				<HomePage />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
  );
}
