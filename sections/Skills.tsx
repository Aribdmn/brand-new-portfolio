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
		".card-skill4",
		".card-skill5",
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

	const feStack = [
		"JavaScript",
		"React.js",
		"Next.js",
		"Vue.js",
		"Nuxt.js",
		"HTML5",
		"CSS3",
		"jQuery",
	];

	const surveyTools = [
		"SPSS",
		"Decipher",
		"SurveyToGo",
		"Confirmit",
		"Unicom Intelligence (Dimensions)",
	];

	const beStack = [
		"Python",
		"Java",
		"TypeScript",
		"Node.js",
		"Django",
		"FastAPI",
		"Spring Boot",
		"RESTful API",
		"JSON/XML",
		"Laravel",
	];

	const dbDevOps = [
		"MySQL",
		"PostgreSQL",
		"Redis",
		"Kafka",
		"Git/GitHub",
		"Linux",
		"Docker",
		"Docker Compose",
		"Nginx",
		"CI/CD Concepts",
	];

	const methodology = [
		"Agile/Scrum",
		"SDLC",
		"API Integration",
		"Functional Testing",
		"Quota Management",
	];

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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
					{/* <!-- front end --> */}
					<div className="card-skill1 border-2 border-primary bg-surface p-md">
						<div className="flex items-center space-x-xs mb-md pt-xs pb-md border-b-2 border-primary border-dashed">
							<h3 className="font-headline-md text-headline-md text-primary">
								Frontend Stack
							</h3>
						</div>
						<div className="flex flex-wrap gap-sm font-mono text-sm">
							{feStack.map((item, key) => {
								return (
									<span
										key={key}
										className="border border-primary px-2 py-1 rounded-none"
									>
										{item}
									</span>
								);
							})}
						</div>
					</div>
					{/* <!-- Data & Survey Platforms --> */}
					<div className="card-skill2 border-2 border-primary bg-surface p-md">
						<div className="flex items-center space-x-xs mb-md pt-xs pb-md border-b-2 border-primary border-dashed">
							<h3 className="font-headline-md text-headline-md text-primary">
								Data & Survey Platforms
							</h3>
						</div>
						<div className="flex flex-wrap gap-sm font-mono text-sm">
							{surveyTools.map((item, key) => {
								return (
									<span
										key={key}
										className="border border-primary px-2 py-1 rounded-none"
									>
										{item}
									</span>
								);
							})}
						</div>
					</div>
					{/* <!-- Backend & API --> */}
					<div className="card-skill3 border-2 border-primary bg-surface p-md">
						<div className="flex items-center space-x-xs mb-md pt-xs pb-md border-b-2 border-primary border-dashed">
							<h3 className="font-headline-md text-headline-md text-primary">
								Backend & API
							</h3>
						</div>
						<div className="flex flex-wrap gap-sm font-mono text-sm">
							{beStack.map((item, key) => {
								return (
									<span
										key={key}
										className="border border-primary px-2 py-1 rounded-none"
									>
										{item}
									</span>
								);
							})}
						</div>
					</div>
					{/* <!-- Databases & DevOps --> */}
					<div className="card-skill4 border-2 border-primary bg-surface p-md">
						<div className="flex items-center space-x-xs mb-md pt-xs pb-md border-b-2 border-primary border-dashed">
							<h3 className="font-headline-md text-headline-md text-primary">
								Databases & DevOps
							</h3>
						</div>
						<div className="flex flex-wrap gap-sm font-mono text-sm">
							{dbDevOps.map((item, key) => {
								return (
									<span
										key={key}
										className="border border-primary px-2 py-1 rounded-none"
									>
										{item}
									</span>
								);
							})}
						</div>
					</div>
					{/* <!-- Methodology --> */}
					<div className="card-skill5 border-2 border-primary bg-surface p-md">
						<div className="flex items-center space-x-xs mb-md pt-xs pb-md border-b-2 border-primary border-dashed">
							<h3 className="font-headline-md text-headline-md text-primary">
								Methodology
							</h3>
						</div>
						<div className="flex flex-wrap gap-sm font-mono text-sm">
							{methodology.map((item, key) => {
								return (
									<span
										key={key}
										className="border border-primary px-2 py-1 rounded-none"
									>
										{item}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
