import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="w-full">
				<About />
				<Experience />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
