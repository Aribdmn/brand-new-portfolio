"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
	const elements = [
		".heading-skill",
		".card-skill1",
		".card-skill2",
		".card-skill3",
	];

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
				stagger: 0.2,
				duration: 1,
				ease: "power2.out",
			});
		});
	});

	return (
		<section
			className="min-h-screen bg-surface-container-low border-b-2 border-primary flex items-center"
			id="skills"
		>
			<div className="max-w-300 mx-auto px-margin w-full py-md">
				<div className="heading-skill flex justify-between items-end mb-lg border-b-2 border-primary pb-sm">
					<h2 className="font-headline-lg text-headline-lg text-primary uppercase">
						Technical Proficiencies
					</h2>
					<span className="font-mono-data text-mono-data text-on-surface-variant uppercase">
						//.
					</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
					{/* <!-- Skill Column 1 --> */}
					<div className="card-skill1 border-2 border-primary bg-surface p-md">
						<div className="flex items-center space-x-xs mb-md pt-xs pb-md border-b-2 border-primary border-dashed">
							<h3 className="font-headline-md text-headline-md text-primary">
								Frontend Stack
							</h3>
						</div>
						<ul className="space-y-sm">
							<li>-&gt; React / Next.js</li>
							<li>-&gt; HTML5 / CSS3 / JavaScript</li>
							<li>-&gt; TypeScript</li>
							<li>-&gt; Tailwind CSS / Bootstrap</li>
						</ul>
					</div>
					{/* <!-- Skill Column 2 --> */}
					<div className="card-skill2 border-2 border-primary bg-primary-container p-md">
						<div className="flex items-center space-x-xs mb-md pt-xs pb-md border-b-2 border-surface border-dashed">
							<h3 className="font-headline-md text-headline-md text-surface">
								Backend Stack
							</h3>
						</div>
						<ul className="space-y-sm text-surface">
							<li>-&gt; Java / Spring Boot</li>
							<li>-&gt; Python / Django / FastAPI</li>
							<li>-&gt; PHP / Laravel</li>
							<li>-&gt; PostgreSQL / MySQL / Redis</li>
						</ul>
					</div>
					{/* <!-- Skill Column 3 --> */}
					<div className="card-skill3 border-2 border-primary bg-surface p-md">
						<div className="flex items-center space-x-xs mb-md pt-xs pb-md border-b-2 border-primary border-dashed">
							<h3 className="font-headline-md text-headline-md text-primary">
								Architecture / DevOps
							</h3>
						</div>
						<ul className="space-y-sm">
							<li>-&gt; Docker / Kubernetes</li>
							<li>-&gt; CI/CD Pipelines</li>
							<li>-&gt; AWS</li>
							<li>-&gt; System Design</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
