import React from 'react';

const ProjectCard = ({project: {title, url, description, tech, bullets}}) => {

  return <div className='project-card'>
          { title }
          { url }
          { description }
          { tech }
          { bullets }
        </div>
};

export default ProjectCard;