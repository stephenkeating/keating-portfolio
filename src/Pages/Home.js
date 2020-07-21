import React from 'react';
import ProjectCard from '../Components/ProjectCard.js'
import Header from '../Components/Header.js'
import projects from '../Data/projects.json';

const Home = () => {

  // projects renders all the projects
  const projectsMap = projects.map((project, i) =>
                        <ProjectCard
                          key={i}
                          project={project}
                          even={i % 2 === 0 ? true : false}
                        />
  )

  return <div>
          <Header/>
          <div className='projects-container'>
            { projectsMap }
          </div>
        </div>
};

export default Home;