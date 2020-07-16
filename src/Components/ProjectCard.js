import React from 'react';

const ProjectCard = ({props}) => {

  console.log(props)

  return <>
          { props.title }
        </>
};

export default ProjectCard;