"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
	const container = useRef<HTMLDivElement>(null);
	const elements = [".heading-project", ".card-project1", ".card-project2"];

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
				duration: 1,
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
					<div className=" flex justify-between items-end mb-lg border-b-2 border-primary pb-sm">
						<h2 className="font-headline-lg text-headline-lg text-primary uppercase">
							Execution Log
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
				<div
					ref={container}
					className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
				>
					{/* <!-- Project Card 1 --> */}
					<div className="card-project1 ">
						<div className="border-2 border-primary bg-surface group relative">
							{/* <!-- Hover Offset block --> */}
							<div className=" absolute inset-0 bg-primary transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200"></div>
							<div className="border-b-2 border-primary h-64 bg-surface-container-high relative overflow-hidden">
								<img
									className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
									data-alt="A stark, high-contrast flat graphic representing a complex data dashboard. Strict geometric shapes, rigid grid alignments, solid blacks, whites, and sharp safety orange highlights. No depth, purely 2D representation of enterprise data analytics UI."
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHfmxbBYaJSz1JhDT_dEBHGXtV3Ufomx8a1H4ym3kFNICRKn1A8ukphHbU7rY2SbwVVn80L29QE1F9CPqh_B1To70uUBceYLkSK3QkA2H61cGeMmbgU10mKIuLaWXRywzC6rv3pORLC0cgaLpc1Zcas9xvMsp2orm_ugRUXNpAjn_-AQ2o15Y-9s5_Z1K71_cdZPmxjYeM641jtp3zJz7p0V03y_8ZS_8l_c47oGOMs5EgTcTdsAnS4aiFb55f1pG1xxDxk6nlH9Q"
								/>
								<div className="absolute top-sm right-sm bg-primary text-on-primary px-xs py-0.5 font-mono-data text-[12px] uppercase border-2 border-primary">
									Status: Deployed
								</div>
							</div>
							<div className="p-md">
								<h3 className="font-headline-md text-headline-md text-primary mb-xs uppercase">
									Enterprise Survey Portal
								</h3>
								<p className="font-body-md text-body-md text-on-surface-variant mb-md h-16 overflow-hidden">
									Engineered a robust, high-capacity survey data collection
									engine processing over 50k concurrent inputs with zero packet
									loss.
								</p>
								<div className="flex justify-between items-center border-t-2 border-primary border-dashed pt-sm">
									<span className="font-mono-data text-mono-data text-primary uppercase">
										React / Python / AWS
									</span>
									<a
										className="font-label-bold text-label-bold uppercase text-secondary-container hover:text-primary transition-colors flex items-center"
										href="#"
									>
										View Protocol
										<span className="material-symbols-outlined ml-[4px] text-[16px]">
											open_in_new
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Project Card 2 --> */}
					<div className="card-project2 ">
						<div className="border-2 border-primary bg-surface group relative">
							<div className="absolute inset-0 bg-primary transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200"></div>
							<div className="border-b-2 border-primary h-64 bg-surface-container-high relative overflow-hidden">
								<img
									className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
									data-alt="A minimalist, orthographic view illustration of server infrastructure mapping. Flat vectors, crisp right angles, employing a restrictive color palette of pure black lines on a white background with specific nodes highlighted in solid orange. Archival-modern aesthetic suited for IT documentation."
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7RKMEdpn_E8BH_zNgCaXhrAEXBPerpxDqefjYVKwepx2C0tf5L-DpO2GCN9-42yTgfYrqXpPOkgE--ggaduwwTKVQysWbRZiyLQWXl27l5SgZZMkQYm7DrHTYLkhQiQ71gj_RKEQsgR6k4NrzJZy_gOsyW8rt61AeM7yBCvpXdAg5eEmKDQprrgysrQtBBTiHM7V0V-U_tXDt4vJOHb5sNPqnoMhYHbBTpcUhEGMWRSw_iDnD9QGDtIaQd5vILFNMuIc-1jqZBfo"
								/>
								<div className="absolute top-sm right-sm bg-primary text-on-primary px-xs py-0.5 font-mono-data text-[12px] uppercase border-2 border-primary">
									Status: Active
								</div>
							</div>
							<div className="p-md">
								<h3 className="font-headline-md text-headline-md text-primary mb-xs uppercase">
									Legacy Systems Migration
								</h3>
								<p className="font-body-md text-body-md text-on-surface-variant mb-md h-16 overflow-hidden">
									Orchestrated the seamless transition of on-premise logistical
									databases to a secure, redundant cloud architecture.
								</p>
								<div className="flex justify-between items-center border-t-2 border-primary border-dashed pt-sm">
									<span className="font-mono-data text-mono-data text-primary uppercase">
										PostgreSQL / Docker
									</span>
									<a
										className="font-label-bold text-label-bold uppercase text-secondary-container hover:text-primary transition-colors flex items-center"
										href="#"
									>
										View Protocol
										<span className="material-symbols-outlined ml-[4px] text-[16px]">
											open_in_new
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
