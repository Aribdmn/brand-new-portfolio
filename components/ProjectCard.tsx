import React, { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase-client";

const ProjectCard = () => {
	const [projects, setProjects] = useState<any[]>([]);

	const fetchProjects = async () => {
		const { error, data } = await supabase
			.from("projects")
			.select("*")
			.limit(2);

		error
			? console.error("Error fetching projects:", error.message)
			: setProjects(data);
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter card-project">
			{projects.map((project, key) => (
				<div key={key} className="">
					<div className="border-2 border-primary bg-surface group relative">
						{/* <!-- Hover Offset block --> */}
						<div className="absolute inset-0 bg-primary transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200"></div>
						<div className="border-b-2 border-primary h-64 bg-surface-container-high relative overflow-hidden">
							<img
								className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
								data-alt={project.description}
								src={project.image_url}
							/>
							<div className="absolute top-sm right-sm bg-primary text-on-primary px-xs py-0.5 font-mono-data text-[12px] uppercase border-2 border-primary">
								Status: {project.status}
							</div>
						</div>
						<div className="p-md">
							<a href={project.preview_url} className="underline">
								<h3 className="font-headline-md text-headline-md text-primary mb-xs uppercase">
									{project.title}
								</h3>
							</a>
							<p className="font-body-md text-body-sm text-on-surface-variant mb-md h-16 overflow-hidden">
								{project.description}
							</p>
							<div className="flex justify-between items-center border-t-2 border-primary border-dashed pt-sm">
								<span className="font-mono-data text-mono-data text-primary uppercase">
									{project.project_tech}
								</span>
								<a
									className="font-label-bold text-label-bold uppercase text-secondary-container hover:text-primary transition-colors flex items-center"
									href={project.github_url}
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
			))}
		</div>
	);
};

export default ProjectCard;
