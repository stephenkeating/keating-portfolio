import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ even, project: {title, url, description, tech, bullets, github, shortName}}) => {

  return (
    <div className={'project-card' + (even ? ' even' : ' odd')}>
      <Link to={`/${shortName}`}>
        <div className='project-image-container'>
          <img className='project-image' src={ require(`../Assets/${shortName}.png`) } alt={`${title} screenshot`}/>
          <div className='project-image-overlay'>
            <div className='project-image-text'>
              → Project Details
            </div>
          </div>
        </div>
      </Link>
      <div className='project-card-title'>
        <Link to={`/${shortName}`}>{title}</Link>
      </div>
      <div className='project-card-description'>
        { description }
      </div>
      <div className='project-card-links'>
        <a href={url} target="_blank" rel="noopener noreferrer">Live</a> 
        {' | '}
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {' | '}
        <Link to={`/${shortName}`}>Project Details</Link>
      </div>
    </div>
  )
};

export default ProjectCard;