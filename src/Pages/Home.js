import React from 'react';
import projects from '../Data/projects.json';

const Home = () => {

  // projects renders all the projects
  const projectsMap = projects.map((project) =>
                        <div>
                          {project.title}
                        </div>
  )

  return <div>{projectsMap}</div>;
};

export default Home;