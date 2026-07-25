"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
	const spanRef = useRef<HTMLSpanElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".contact-init",
				start: "top 80%",
			},
		});

		tl.from(".contact-init", {
			opacity: 0,
			y: 100,
			duration: 0.5,
			ease: "power2.out",
		})
			.from(".form-init", {
				opacity: 0,
				y: 100,
				duration: 0.5,
				ease: "power2.out",
			})
			.to(spanRef.current, {
				// blinking cursor effect
				opacity: 0,
				repeat: -1,
				yoyo: true,
				duration: 0.5,
				ease: "power2.inOut",
			});
	});

	return (
		<section
			className="contact-section min-h-screen bg-surface-container-low flex items-center"
			id="contact"
		>
			<div className="max-w-300 mx-auto px-margin w-full grid grid-cols-1 md:grid-cols-2 gap-xl py-lg">
				<div ref={divRef} className="contact-init">
					<h2 className="font-display-lg text-display-lg text-primary uppercase leading-none">
						Initiate
					</h2>
					<h2 className="font-display-lg text-display-lg text-secondary-container uppercase leading-none mb-md">
						Protocol.
					</h2>
					<p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
						Drop a ping through the form to discuss independent contracting, IT
						roles, or just to expand our network.
					</p>
					<div className="space-y-sm font-mono-data text-mono-data uppercase text-primary border-l-4 border-primary pl-sm">
						<div className="flex items-center">
							<span className="material-symbols-outlined mr-xs">mail</span>
							aribdmn.dev@gmail.com
						</div>
						<div className="flex items-center">
							<span className="material-symbols-outlined mr-xs">
								location_on
							</span>
							Jakarta, Indonesia
						</div>
						<div className="flex items-center text-secondary-container mt-sm">
							<span className="material-symbols-outlined mr-xs">work</span>
							<span ref={spanRef}>OPEN FOR COLLABORATION & PROJECTS.</span>
						</div>
					</div>
				</div>
				<div
					ref={divRef}
					className="form-init bg-surface border-2 border-primary p-lg relative"
				>
					{/* <!-- Accent corner --> */}
					<div className="absolute top-0 right-0 w-8 h-8 border-b-2 border-l-2 border-primary bg-secondary-container"></div>
					<form className="space-y-md">
						<div>
							<label className="block font-label-bold text-label-bold text-primary uppercase mb-xs">
								IDENTIFIER (NAME)
							</label>
							<input
								className="w-full bg-surface border-2 border-primary p-sm font-mono-data focus:outline-none focus:border-secondary-container focus:bg-surface-bright transition-colors rounded-none placeholder:text-outline"
								placeholder="Enter full name"
								type="text"
							/>
						</div>
						<div>
							<label className="block font-label-bold text-label-bold text-primary uppercase mb-xs">
								RETURN ADDRESS (EMAIL)
							</label>
							<input
								className="w-full bg-surface border-2 border-primary p-sm font-mono-data focus:outline-none focus:border-secondary-container focus:bg-surface-bright transition-colors rounded-none placeholder:text-outline"
								placeholder="username@domain.com"
								type="email"
							/>
						</div>
						<div>
							<label className="block font-label-bold text-label-bold text-primary uppercase mb-xs">
								CONNECTION TYPE
							</label>
							<select
								className="w-full bg-surface border-2 border-primary p-sm font-mono-data text-primary focus:outline-none focus:border-secondary-container focus:bg-surface-bright transition-colors rounded-none cursor-pointer"
								defaultValue={""}
							>
								<option value="" disabled>
									[ SELECT INTENT ]
								</option>
								<option value="networking">01 - Networking / Connect</option>
								<option value="hiring">02 - Hiring / Project Inquiry</option>
							</select>
						</div>

						<div>
							<label className="block font-label-bold text-label-bold text-primary uppercase mb-xs">
								QUERY / SPECS
							</label>
							<textarea
								className="w-full bg-surface border-2 border-primary p-sm font-mono-data focus:outline-none focus:border-secondary-container focus:bg-surface-bright transition-colors rounded-none placeholder:text-outline resize-none"
								placeholder="Detail project parameters..."
								rows={4}
							></textarea>
						</div>
						<button
							className="w-full font-label-bold text-label-bold uppercase tracking-wider bg-secondary-container text-primary px-lg py-sm border-2 border-primary hover:bg-primary hover:text-secondary-container transition-colors duration-150 flex justify-center items-center"
							type="submit"
						>
							TRANSMIT DATA
							<span className="material-symbols-outlined ml-xs">send</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
