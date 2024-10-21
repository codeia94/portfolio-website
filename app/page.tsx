import HomePage from './components/home/page';
import About from './components/about/page';
import Skills from './components/skills/page';
import Projects from './components/projects/page';
import Contact from './components/contact/page';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer';

export default function Home() {
  return (
		<>
			<NavBar />
			<main className='xxs:mx-6'>
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
