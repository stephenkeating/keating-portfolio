import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ even, project: {title, url, description, tech, bullets, github, image}}) => {

  return <div className={'project-card' + (even ? ' even' : ' odd')}>
          <div className='project-image-container'>
            <img className='project-image' src={ require(`../Assets/${image}`) } alt={`${title} screenshot`}/>
            <div className='project-image-overlay'>
              <div className='project-image-text'>
                → Project Details
              </div>
            </div>
          </div>
          <div className='project-card-title'>
            <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
          </div>
          <div className='project-card-description'>
            { description }
          </div>
          {/* <div className='project-card-tech'>
            { tech.map((t, i) =>
                        <span>
                          { (i ? ' | ': '') + t }
                        </span>
            )}
          </div>
          <div className='project-card-bullets'>
            { bullets.map(bullet =>
                          <div>
                            {'→ '}{ bullet }
                          </div>
              )}
          </div> */}
          <div className='project-card-links'>
            <a href={url} target="_blank" rel="noopener noreferrer">Live</a> 
            {' | '}
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {' | '}
            <a href={github} target="_blank" rel="noopener noreferrer">Project Details</a>
          </div>
        </div>
};

export default ProjectCard;