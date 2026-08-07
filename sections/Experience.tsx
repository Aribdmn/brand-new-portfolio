"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experience = () => {
	useGSAP(() => {
		gsap.from(".exp-heading div", {
			scrollTrigger: {
				trigger: ".exp-heading div",
				start: "top 80%",
			},
			opacity: 0,
			y: 100,
			duration: 0.5,
			ease: "power2.out",
		});

		gsap.from(".exp-heading p", {
			scrollTrigger: {
				trigger: ".exp-heading p",
				start: "top 80%",
			},
			opacity: 0,
			y: 100,
			duration: 0.5,
			ease: "power2.out",
		});

		gsap.from(".exp-card1", {
			scrollTrigger: {
				trigger: ".exp-card1",
				start: "top 80%",
			},
			opacity: 0,
			y: 100,
			duration: 0.5,
			ease: "power2.out",
		});

		gsap.from(".exp-card2", {
			scrollTrigger: {
				trigger: ".exp-card2",
				start: "top 80%",
			},
			opacity: 0,
			y: 100,
			duration: 0.5,
			ease: "power2.out",
		});
	});

	return (
		<section
			className="min-h-screen bg-surface-container-low border-b-2 border-primary flex items-center"
			id="experience"
		>
			<div className="max-w-300 mx-auto px-margin w-full py-lg">
				<div className="mb-lg exp-heading">
					<div className="flex justify-between items-end border-b-2 border-primary pb-sm mb-2">
						<h2 className="font-headline-lg text-headline-lg text-primary uppercase">
							Execution Log
						</h2>
						<span className="font-mono-data text-mono-data text-on-surface-variant uppercase">
							//.
						</span>
					</div>
					<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
						Professional timeline and project interventions.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-gutter">
					{/* <!-- Role 1 --> */}
					<div className="exp-card1 border-2 border-primary bg-surface p-md rounded-none">
						<div className="flex flex-col md:flex-row gap-3 justify-between items-start mb-md border-b-2 border-primary border-dashed pb-sm">
							<div>
								<h3 className="font-headline-md text-headline-md text-primary uppercase">
									Survey Programmer / Developer
								</h3>
								<h4 className="font-label-bold text-label-bold text-secondary-container uppercase">
									NielsenIQ
								</h4>
							</div>
							<div className="font-mono text-sm text-primary uppercase border-2 border-primary px-2 py-1 rounded-none">
								Sep 2019 - PRESENT
							</div>
						</div>
						<ul className="space-y-sm text-on-surface-variant">
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Engineered survey apps successfully capturing 5,000+ monthly
								completed respondent data.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Scripted complex survey logic & client requirements using
								Python, JS, and VBScript.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Implemented branching, piping, and custom validations across
								APAC regional projects.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Optimized database queries for large datasets to streamline
								exports and reporting.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Resolved production bugs and system bottlenecks in
								high-concurrency environments.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Delivered system modules within Agile/Scrum cross-functional
								teams (4–10 members).
							</li>
						</ul>
					</div>

					{/* <!-- Role 2 --> */}
					<div className="exp-card2 border-2 border-primary bg-surface p-md rounded-none">
						<div className="flex flex-col md:flex-row gap-3 justify-between items-start mb-md border-b-2 border-primary border-dashed pb-sm">
							<div>
								<h3 className="font-headline-md text-headline-md text-primary uppercase">
									Software QA
								</h3>
								<h4 className="font-label-bold text-label-bold text-secondary-container uppercase">
									NielsenIQ
								</h4>
							</div>
							<div className="font-mono text-sm text-primary uppercase border-2 border-primary px-2 py-1 rounded-none">
								Oct 2017 - Sep 2019
							</div>
						</div>
						<ul className="space-y-sm text-on-surface-variant">
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Executed manual & early automated testing to validate business
								logic compliance.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Tracked, documented, and resolved system logic bugs and UI
								issues.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Verified cross-platform datasets and codebooks, ensuring 100%
								data integrity.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Partnered with devs to debug issues quickly and streamline
								system workflows.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
