import React from 'react';
import projects from '../Data/projects.json';

const Earworm = () => {

  const {title, url, description, tech, bullets, github, shortName} = projects[0]

  return (
    <div className='project-page'>
      <h1>
        {title}
      </h1>
      <h1>
        <img className='project-page-image' src={ require(`../Assets/${shortName}.png`) } alt={`${title} screenshot`}/>
      </h1>
      <div className='project-page-title'>
        {title}
      </div>
      <div className='project-page-description'>
        { description }
      </div>
      <div className='project-card-tech'>
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
      </div>
      <div className='project-card-links'>
        <a href={url} target="_blank" rel="noopener noreferrer">Live</a> 
        {' | '}
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  )
};

export default Earworm;