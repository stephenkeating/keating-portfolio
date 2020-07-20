import React from 'react';

const ProjectCard = ({project: {title, url, description, tech, bullets}}) => {

  return <div className='project-card'>
          <div className='project-card-title'>
            { title }
          </div>
          { url }
          { description }
          { tech }
          { bullets }
        </div>
};

export default ProjectCard;