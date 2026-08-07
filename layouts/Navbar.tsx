"use client";

import Link from "next/link";
import { useNavigationStore } from "@/stores/useNavigationState";
import { useEffect, useState, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
	const { activeSection, setActiveSection } = useNavigationStore();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);

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
			"block px-md py-xs font-label-bold text-[12px] font-bold uppercase tracking-wider transition-colors duration-150 ease-in-out ";
		return activeSection === targetId
			? baseClass + "text-secondary border-b-2 border-secondary bg-surface"
			: baseClass +
					"text-on-surface-variant hover:bg-secondary hover:text-on-secondary";
	};

	useGSAP(
		() => {
			const tl = gsap.timeline({ paused: true });

			tl.from(menuRef.current, {
				y: -100,
				duration: 1,
				ease: "power3.out",
			}).from(".nav-mobile", {
				x: -50,
				opacity: 0,
				duration: 0.5,
				stagger: 0.2,
			});

			timelineRef.current = tl;
		},
		{ scope: menuRef },
	);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);

		if (!timelineRef.current) return;

		if (!isMobileMenuOpen) {
			setIsMobileMenuOpen(true);
			timelineRef.current.play(); // Jalankan animasi maju (Buka)
		} else {
			// Mainkan animasi secara mundur (Tutup), lalu ubah state isOpen setelah selesai
			timelineRef.current.reverse();
			setTimeout(() => {
				setIsMobileMenuOpen(false);
			}, 400); // Sesuaikan dengan durasi animasi tutup
		}
	};

	return (
		<nav className="fixed top-0 w-full z-50 bg-surface border-b-2 border-primary transition-colors duration-150 ease-in-out">
			<div className="flex justify-between  items-center px-margin pt-4 py-5 max-w-300 mx-auto">
				<div className="z-50 font-headline-md text-headline-md font-bold text-primary  tracking-tight">
					BudDev!
				</div>
				{/* <!-- Desktop Navigation --> */}
				<ul
					className="hidden md:flex space-x-0 border-x-2 border-primary divide-x-2 divide-primary"
					id="nav-links"
				>
					{[
						"home",
						"about me",
						"experience",
						"skills",
						"projects",
						"contact",
					].map((id) => (
						<li key={id}>
							<Link href={`#${id}`} className={getLinkClass(id)}>
								{id}
							</Link>
						</li>
					))}
				</ul>
				{/* <a
					href="#contact"
					className="hidden md:inline-flex items-center justify-center font-label-bold text-label-bold uppercase tracking-wider bg-secondary-container text-primary p-sm border-2 border-primary hover:bg-primary hover:text-secondary-container transition-colors duration-150 ease-in-out"
				>
					Get In Touch
				</a> */}
				{/* <!-- Mobile Menu Icon (Placeholder interaction) --> */}
				<button className="md:hidden text-primary" onClick={toggleMobileMenu}>
					<span
						className="material-symbols-outlined"
						style={{ fontVariationSettings: '"FILL" 1' }}
					>
						{isMobileMenuOpen ? "close" : "menu"}
					</span>
				</button>
				{/* <!-- Mobile Menu (Placeholder interaction) --> */}

				<div
					ref={menuRef}
					className={`${isMobileMenuOpen ? "block" : "hidden"} z-30 absolute top-full left-0 w-full bg-surface border-b-2 border-primary shadow-lg`}
				>
					<ul className="py-2 space-y-1">
						{[
							"home",
							"about me",
							"experience",
							"skills",
							"projects",
							"contact",
						].map((id) => (
							<li key={id} className="nav-mobile" onClick={toggleMobileMenu}>
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
					<a
						href="#contact"
						className="mx-5 mb-2 items-center justify-center font-label-bold text-label-bold tracking-wider bg-secondary-container text-primary p-2 border border-primary hover:bg-primary hover:text-secondary-container transition-colors duration-150 ease-in-out"
						onClick={toggleMobileMenu}
					>
						Get In Touch
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
