import React from "react";

const Footer = () => {
	return (
		<footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t-2 border-primary w-full py-md px-lg">
			<div className="max-w-300 mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
				<div className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">
					BUDDEV!
				</div>
				<div className="font-code-sm text-code-sm text-primary ">
					Keep it simple, make it scale.
				</div>
				<div className="flex gap-md">
					<a
						className="font-code-sm text-code-sm text-primary hover:text-secondary-container uppercase"
						href="https://github.com/Aribdmn"
					>
						Github
					</a>
					<a
						className="font-code-sm text-code-sm text-primary hover:text-secondary-container uppercase"
						href="https://www.linkedin.com/in/aribdmn99/"
					>
						LinkedIn
					</a>
					<a
						className="font-code-sm text-code-sm text-primary hover:text-secondary-container uppercase"
						href="https://ariyantobudiman.vercel.app/"
					>
						Source
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
