import React from 'react';
import ProjectCard from '../Components/ProjectCard.js'
import projects from '../Data/projects.json';

const Home = () => {

  // projects renders all the projects
  const projectsMap = projects.map((project, i) =>
                        <ProjectCard
                          key={i}
                          project={project}
                        />
  )

  return <>
          { projectsMap }
        </>
};

export default Home;