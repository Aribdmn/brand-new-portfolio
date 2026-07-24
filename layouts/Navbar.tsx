"use client";

import Link from "next/link";
import { useNavigationStore } from "@/stores/useNavigationState";
import { useEffect } from "react";

const Navbar = () => {
	const { activeSection, setActiveSection } = useNavigationStore();

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const observerOptions = {
			root: null,
			rootMargin: "-50% 0px -50% 0px",
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, observerOptions);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, [setActiveSection]);

	const getLinkClass = (targetId: string) => {
		const baseClass =
			"block px-md py-xs font-label-bold text-[14px] font-bold uppercase tracking-wider transition-colors duration-150 ease-in-out ";
		return activeSection === targetId
			? baseClass + "text-secondary border-b-2 border-secondary bg-surface"
			: baseClass +
					"text-on-surface-variant hover:bg-secondary hover:text-on-secondary";
	};

	return (
		<nav className="fixed top-0 w-full z-50 bg-surface border-b-2 border-primary transition-colors duration-150 ease-in-out">
			<div className="flex justify-between items-center px-margin pt-4 py-5 max-w-300 mx-auto">
				<div className="font-headline-md text-headline-md font-bold text-primary  tracking-tight">
					BUDDEV!
				</div>
				{/* <!-- Desktop Navigation --> */}
				<ul
					className="hidden md:flex space-x-0 border-x-2 border-primary divide-x-2 divide-primary"
					id="nav-links"
				>
					{["about", "skills", "projects", "contact"].map((id) => (
						<li key={id}>
							<Link href={`#${id}`} className={getLinkClass(id)}>
								{id}
							</Link>
						</li>
					))}
				</ul>
				<button className="hidden md:inline-flex items-center justify-center font-label-bold text-label-bold uppercase tracking-wider bg-secondary-container text-primary p-sm border-2 border-primary hover:bg-primary hover:text-secondary-container transition-colors duration-150 ease-in-out">
					DOWNLOAD CV
				</button>
				{/* <!-- Mobile Menu Icon (Placeholder interaction) --> */}
				<button className="md:hidden text-primary">
					<span
						className="material-symbols-outlined"
						style={{ fontVariationSettings: '"FILL" 1' }}
					>
						menu
					</span>
				</button>
				{/* <!-- Mobile Menu (Placeholder interaction) --> */}
				<div className="hidden absolute top-full left-0 w-full bg-surface border-b-2 border-primary shadow-lg">
					<ul className="py-2 space-y-1">
						{["about", "skills", "projects", "contact"].map((id) => (
							<li key={id}>
								<Link
									href={`#${id}`}
									className={getLinkClass(id)}
									onClick={() => setActiveSection(id)}
								>
									{id}
								</Link>
							</li>
						))}
					</ul>
					<button className="mx-5 mb-2 items-center justify-center font-label-bold text-label-bold uppercase tracking-wider bg-secondary-container text-primary p-2 border border-primary hover:bg-primary hover:text-secondary-container transition-colors duration-150 ease-in-out">
						DOWNLOAD CV
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
