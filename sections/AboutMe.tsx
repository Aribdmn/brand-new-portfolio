"use client";

"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutMe = () => {
	const elements = [
		".heading-aboutme",
		".image-aboutme",
		".card-aboutme1",
		".card-aboutme2",
		".card-aboutme3",
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
			id="about me"
		>
			<div className="max-w-300 mx-auto px-margin w-full py-md">
				<div className="heading-aboutme flex justify-between items-end mb-lg border-b-2 border-primary pb-sm">
					<h2 className="font-headline-lg text-headline-lg text-primary uppercase">
						About Me
					</h2>
					<span className="font-mono-data text-mono-data text-on-surface-variant uppercase">
						//.
					</span>
				</div>
				<div className="max-w-300 mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
					{/* <!-- Left Column: Personal Photo & Metadata --> */}
					<div className="md:col-span-5 space-y-md image-aboutme">
						<div className="p-4 bg-surface-container-low rounded-none">
							<div className="relative mb-sm">
								<img
									alt="Ariyanto Budiman"
									className="w-full mx-auto aspect-square object-cover border border-primary rounded-none grayscale hover:grayscale-0 transition-all duration-500"
									src="./pp.avif"
								/>
							</div>
							<div className="text-center font-mono text-[10px] uppercase tracking-widest text-primary mb-md">
								[ ARIYANTO_BUDIMAN // DEV_PROFILE ]
							</div>
							{/* <!-- Metadata List --> */}
							<div className="border-t border-primary pt-md space-y-xs font-mono text-xs text-on-surface-variant">
								<div className="flex flex-col gap-y-2 mb-4">
									<span className="text-primary">PROFESSIONAL EXPERIENCE:</span>{" "}
									<div className="flex flex-col md:flex-row justify-between mt-1">
										<div>
											<span className="font-mono text-secondary-container mr-sm">
												&gt;
											</span>
											<span>Survey Programmer / Developer</span>
										</div>
										<span> (2019 - Present)</span>
									</div>
									<div className="flex justify-between">
										<div>
											<span className="font-mono text-secondary-container mr-sm">
												&gt;
											</span>
											<span>Quality Assurance</span>
										</div>
										<span> (2018 - 2019)</span>
									</div>
								</div>

								<div className="flex flex-col md:flex-row justify-between">
									<span className="text-primary">LOCATION:</span>{" "}
									<span>Jakarta, Indonesia</span>
								</div>
								<div className="flex justify-between">
									<span className="text-primary">STACK:</span>{" "}
									<span>Java, Python, JS, React</span>
								</div>
								<div className="flex justify-between border-t border-primary border-dashed mt-xs pt-xs">
									<span className="text-secondary-container">STATUS:</span>
									<span className="text-primary">AVAILABLE FOR ROLES</span>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Right Column: Technical Summaries --> */}
					<div className="md:col-span-7 flex flex-col gap-sm">
						{/* <!-- Card 1 --> */}
						<div className="border border-primary p-md bg-surface-container-low rounded-none card-aboutme1">
							<div className="font-mono text-xs text-secondary-container mb-xs uppercase tracking-widest">
								[ 01 // BACKGROUND ]
							</div>
							<p className="font-body-md text-on-surface-variant">
								Informatics Engineering graduate with over 6 years of core
								technical experience at NielsenIQ, specializing in logic-driven
								systems, data processing, and Quality Assurance. Proven track
								record in engineering survey applications that collect 5,000+
								verified respondent submissions monthly across the Asia-Pacific
								(APAC) region, collaborating seamlessly within Agile/Scrum
								environments to deliver high-impact solutions.
							</p>
						</div>
						{/* <!-- Card 2 --> */}
						<div className="border border-primary p-md bg-surface-container-low rounded-none card-aboutme2">
							<div className="font-mono text-xs text-secondary-container mb-xs uppercase tracking-widest">
								[ 02 // CORE COMPETENCIES ]
							</div>
							<p className="font-body-md text-on-surface-variant">
								Strong expertise in large-scale Survey Programming, automated
								logic flows (branching, piping, quota management), and
								end-to-end data integrity verification. Proficient in backend
								development using Python, Java, and RESTful APIs, combined with
								modern frontend engineering in JavaScript and React.js to build
								functional, high-performing web applications.
							</p>
						</div>
						{/* <!-- Card 3 --> */}
						<div className="border border-primary p-md bg-surface-container-low rounded-none card-aboutme3">
							<div className="font-mono text-xs text-secondary-container mb-xs uppercase tracking-widest">
								[ 03 // ENGINEERING FOCUS ]
							</div>
							<p className="font-body-md text-on-surface-variant">
								Focused on architecting scalable end-to-end web applications
								through modern Full-Stack paradigms and robust Software
								Engineering practices. Driven by bridging a deep data-logic
								foundation with modern cloud infrastructure, containerization,
								and high-concurrency optimization to build reliable,
								enterprise-grade software systems.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
