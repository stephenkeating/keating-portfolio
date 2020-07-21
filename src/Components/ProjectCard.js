import React from 'react';

const ProjectCard = ({ even, project: {title, url, description, tech, bullets, github, image}}) => {

  return <div className={'project-card' + (even ? ' even' : ' odd')}>
          <img className='project-image' src={ require(`../Assets/${image}`) } />
          <div className='project-card-title'>
            <a href={url} target="_blank">{title}</a>
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
            <a href={url} target="_blank">Live</a> 
            {' | '}
            <a href={github} target="_blank">GitHub</a>
          </div>
        </div>
};

export default ProjectCard;