import React from 'react';

const ProjectCard = ({project: {title, url, description, tech, bullets}}) => {

  return <div className='project-card'>
          { title }
        </div>
};

export default ProjectCard;