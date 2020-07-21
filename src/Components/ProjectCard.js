import React from 'react';

const ProjectCard = ({project: {title, url, description, tech, bullets}}) => {

  return <div className='project-card'>
          <div className='project-card-title'>
            <a href={url}>{title}</a>
          </div>
          <div className='project-card-description'>
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
            { bullets.map((bullet) =>
                          <div>
                            { bullet }
                          </div>
              )}
          </div>
        </div>
};

export default ProjectCard;