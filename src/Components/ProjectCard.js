import React from 'react';

const ProjectCard = ({project: {title, url, description, tech, bullets}}) => {

  return <>
          { title }
        </>
};

export default ProjectCard;