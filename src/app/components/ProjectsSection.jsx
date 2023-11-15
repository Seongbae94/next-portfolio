"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Travel blog",
    description: "A MERN project with the use of basic CRUD",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://github.com/Seongbae94/MERN_PROJECT",
    previewUrl: "https://react-front-eight.vercel.app",
  },
  {
    id: 2,
    title: "Kakao clone",
    description: "A clone project done in bootcamp",
    image: "/images/projects/bootcamp3.png",
    tag: ["All", "Bootcamp", "Web"],
    gitUrl: "https://github.com/Seongbae94/frontendClone",
    previewUrl: "https://frontend-clone-psi.vercel.app/home",
  },
  {
    id: 3,
    title: "Todo-list",
    description: "A simple project done by using basic react hooks in bootcamp",
    image: "/images/projects/bootcamp2.png",
    tag: ["All", "Bootcamp", "Web"],
    gitUrl: "https://github.com/Seongbae94/reactWeek2forVercel",
    previewUrl: "https://react-week2for-vercel.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Bootcamp"
          isSelected={tag === "Bootcamp"}
        />
      </div>
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
