"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin, TextPlugin, SplitText);

const About = () => {
	const container = useRef<HTMLDivElement>(null);
	const textContentRef = useRef<HTMLSpanElement>(null);

	useGSAP(() => {
		const originalHTML = textContentRef.current?.innerHTML || "";
		if (textContentRef.current) {
			textContentRef.current.innerHTML = "";
		}

		gsap.to(".grid-bg", {
			backgroundPosition: "48px 48px",
			duration: 5,
			ease: "none",
			repeat: -1,
		});

		gsap.from(".grid-bg", {
			opacity: 0,
			duration: 2,
			ease: "power2.out",
		});

		gsap.to(".cursor", {
			opacity: 0,
			repeat: -1,
			yoyo: true,
			duration: 0.5,
			ease: "power2.inOut",
		});

		let heroTitle = SplitText.create(".hero h1", {
			type: "chars, words, lines",
		});

		gsap.to(textContentRef.current, {
			text: originalHTML,
			duration: 4,
			ease: "power2.inOut",
			delay: 1,
		});

		const tl = gsap.timeline();

		tl.to("#init-text", {
			duration: 1,
			scrambleText: {
				text: "{original}",
				chars: "0123456789!@#$%^&*",
				revealDelay: 0.5,
				speed: 0.05,
			},
		})
			.from(heroTitle.lines, {
				duration: 0.5,
				y: 100,
				opacity: 0,
				stagger: 0.5,
				ease: "power2.out",
			})
			.from(".hero h2", {
				clipPath: "inset(0% 0% 0% 100%)",
				duration: 1,
				ease: "power3.inOut",
			})
			.from(".hero p", {
				duration: 0.5,
				opacity: 0,
				ease: "power2.out",
			})
			.from(".hero a", {
				duration: 0.5,
				opacity: 0,
				y: 100,
				ease: "power2.out",
			})
			.from("nav", {
				y: -100,
				opacity: 0,
				duration: 0.5,
			});
	});

	return (
		<section
			className="min-h-screen flex items-center relative border-b-2 border-primary pt-14 lg:pt-20"
			id="about"
		>
			{/* <!-- Decorative Grid Background --> */}
			<div
				ref={container}
				className="grid-bg absolute inset-0 pointer-events-none opacity-10"
				style={{
					backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,

					backgroundSize: "48px 48px",
				}}
			></div>
			<div className="max-w-300 mx-auto px-margin w-full grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10 py-lg">
				<div className="md:col-span-7 flex flex-col justify-center">
					<div
						ref={container}
						id="init-text"
						className="inline-block bg-primary text-on-primary font-mono-data text-mono-data px-xs py-1 mb-md self-start border-2 border-primary uppercase tracking-widest"
					>
						<span className="init-text-original">SYS_REQ: INITIALIZED </span>
						<span ref={textContentRef} className="cursor-dot">
							&bull;
						</span>
					</div>
					<div ref={container} className="flex flex-col hero">
						<h1 className="font-display-md text-display-md lg:font-display-lg lg:text-display-lg text-primary leading-none mb-md uppercase">
							ARIYANTO
							<br />
							<span className="text-secondary-container">BUDIMAN.</span>
						</h1>
						<h2 className=" font-headline-md text-headline-md text-primary mb-md border-l-4 border-secondary-container pl-sm">
							Software Developer / Survey Programmer
						</h2>
						<div className="">
							<p className="text-[16px] lg:font-body-lg lg:text-body-lg text-on-surface-variant mb-lg border-b-2 border-on-surface-variant pb-md max-w-128">
								Building robust software architectures <br />
								with a strong focus on Full-Stack development <br />
								and DevOps engineering.
							</p>
							<div className="flex space-x-md">
								<a
									className="inline-flex items-center justify-center font-label-bold text-label-bold uppercase tracking-wider bg-primary text-on-primary px-md py-sm border-2 border-primary hover:bg-secondary-container hover:text-primary transition-colors duration-150"
									href="#projects"
								>
									VIEW MY WORKS
									<span className="material-symbols-outlined ml-xs">
										arrow_forward
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden md:flex md:col-span-5 items-center justify-center relative lg:mt-lg mt-0">
					{/* <!-- Contrast Layering Container --> */}
					<div className="container-console-code w-full aspect-square bg-primary-container border-2 border-primary relative p-sm">
						<div className="absolute top-0 left-0 w-full h-full border-2 border-primary transform translate-x-sm translate-y-sm -z-10 bg-secondary-container"></div>
						<div className="flex gap-xs border-b-2 border-surface-container-highest pb-sm">
							<div className="w-4 h-4 bg-error no-rounded"></div>
							<div className="w-4 h-4 bg-[#c6c6c7] no-rounded"></div>
							<div className="w-4 h-4 bg-secondary-fixed no-rounded"></div>
						</div>
						<div
							ref={container}
							className=" container-text-code text-primary p-sm h-full bg-[#0A0A0A] border border-[#2A2A2A]"
						>
							<span
								ref={textContentRef}
								className="whitespace-pre-wrap inline text-[11px] lg:text-[14px] font-mono-data text-mono-data"
							>
								<span className="text-[#c6c6c7]">const</span>{" "}
								<span className="text-[#c6c6c7]">systemConfig = {"{"}</span>
								<br />
								{"	"}
								<span className="text-[#c6c6c7]">developer: </span>
								<span className="text-[#13ff43]">
									&quot;ARIYANTO BUDIMAN&quot;
								</span>
								<span className="text-[#c6c6c7]">,</span>
								<br />
								{"	"}
								<span className="text-[#c6c6c7]">role: </span>
								<span className="text-[#13ff43]">
									&quot;Software Developer&quot;
								</span>
								<span className="text-[#c6c6c7]">,</span>
								<br />
								{"	"}
								<span className="text-[#c6c6c7]">coreSkills: [</span>
								<span className="text-[#13ff43]">&quot;JavaScript&quot;</span>
								<span className="text-[#c6c6c7]">, </span>
								<span className="text-[#13ff43]">&quot;Python&quot;</span>
								<span className="text-[#c6c6c7]">, </span>
								<span className="text-[#13ff43]">&quot;Java&quot;</span>
								<span className="text-[#c6c6c7]">, </span>
								<span className="text-[#13ff43]">&quot;SQL&quot;</span>
								<span className="text-[#c6c6c7]">],</span>
								<br />
								{"	"}
								<span className="text-[#c6c6c7]">domain: </span>
								<span className="text-[#13ff43]">
									&quot;Logic-Driven & Data Systems&quot;
								</span>
								<span className="text-[#c6c6c7]">,</span>
								<br />
								{""}
								{"	"}
								<span className="text-[#c6c6c7]">execute: () =&gt; {"{"}</span>
								<br />
								<span className="text-[#c6c6c7]">{"	"}return </span>
								<span className="text-[#13ff43]">
									&quot;Optimizing code & architecture.&quot;
								</span>
								<span className="text-[#c6c6c7]">;</span>
								<br />
								{"	"}
								<span className="text-[#c6c6c7]">{"}"}</span>
								<br />
								<span className="text-[#c6c6c7]">{"};"}</span>
								<br />
							</span>
							<span className="text-[#c6c6c7] cursor">_</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
