"use client";

import ProjectCard from "@/components/ProjectCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
	const container = useRef<HTMLDivElement>(null);
	const elements = [".heading-project"];

	useGSAP(() => {
		elements.forEach((element) => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: "top 80%",
				},
			});

			tl.from(element, {
				opacity: 0,
				y: 100,
				duration: 0.5,
				ease: "power2.out",
			});
		});
	});

	return (
		<section
			className="min-h-screen bg-surface border-b-2 border-primary flex items-center"
			id="projects"
		>
			<div className="max-w-300 mx-auto px-margin w-full py-lg">
				<div ref={container} className="heading-project mb-lg">
					<div className="flex justify-between items-end border-b-2 border-primary pb-sm mb-2">
						<h2 className="font-headline-lg text-headline-lg text-primary uppercase">
							Projects and Experiments
						</h2>
						<span className="font-mono-data text-mono-data text-on-surface-variant uppercase">
							//.
						</span>
					</div>
					<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
						A mix of production-ready deployments and experiments that currently
						only work on my machine.
					</p>
				</div>
				<ProjectCard />
			</div>
		</section>
	);
};

export default Projects;
