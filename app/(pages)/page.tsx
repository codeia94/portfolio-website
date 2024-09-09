import HomePage from './home/page';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Contact from './contact/page';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/footer';

export default function Home() {
  return (
		<>
			<NavBar />
			<main className='mx-4'>
				<HomePage />
				<span className="flex items-center">
					<span className="h-px flex-1 bg-flint"></span>
					<span className="shrink-0 px-6">Hello</span>
					{/* idea: dynamic change for hello to multiple language */}
					<span className="h-px flex-1 bg-flint"></span>
				</span>
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
  );
}
