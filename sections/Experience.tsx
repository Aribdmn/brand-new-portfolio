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
									Programmer / Developer
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
								Architected complex logic-driven applications for large-scale
								data collection, capturing and processing feedback from over
								5,000 users monthly.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Spearheaded the technical translation of client questionnaires
								and business requirements into functional scripts using survey
								platform with various programming languages such as Python,
								JavaScript, and VBScript.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Developed complex logic including branching, piping,
								randomization, and custom validations for concurrent projects
								across the Asia-Pacific region.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Optimized database interactions to handle large-scale datasets
								effectively, ensuring highly efficient data export, processing,
								and reporting.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Led technical troubleshooting for production systems,
								implementing robust bug fixes in high-concurrency environments.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Collaborated within Agile/Scrum frameworks alongside
								cross-functional teams of 4 to 10 members to consistently
								deliver functional system modules.
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
								Sep 2018 - Sep 2019
							</div>
						</div>
						<ul className="space-y-sm text-on-surface-variant">
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Conducted comprehensive manual testing and early automated
								validation for complex applications to ensure logic
								implementation met business and client specifications.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Systematically identified, documented, and reported logic errors
								and UI inconsistencies for immediate resolution.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Verified final links, datasets, and codebooks across desktop and
								mobile platforms prior to stakeholder delivery, maintaining 100%
								data integrity.
							</li>
							<li className="flex items-start">
								<span className="font-mono text-secondary-container mr-sm">
									&gt;
								</span>
								Collaborated seamlessly with developers and survey programmers
								to troubleshoot and debug technical issues quickly, optimizing
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
