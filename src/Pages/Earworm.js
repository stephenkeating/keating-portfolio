import React, { useEffect } from 'react';
import projects from '../Data/projects.json';

const Earworm = () => {

  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)

  }, []);

  const {title, url, description, tech, bullets, github, shortName} = projects[0]

  return (
    <div className='project-page'>
      <h1 className='product-page-title'>
        {title}
      </h1>
      {/* <div className='project-page-sub-title'>
        {title}
      </div> */}
      <div className='project-page-row'>
        <div className='project-page-column left-column'>
          <div className='project-page-description'>
            { description }
          </div>
          <div className='project-page-links'>
            <a href={url} target="_blank" rel="noopener noreferrer">Live</a> 
            {' | '}
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className='project-page-tech'>
            {'Tech used: '}
            <br></br>
            { tech.map((t, i) =>
                        <span>
                          { (i ? ' | ': '') + t }
                        </span>
            )}
          </div>
        </div>
        <div className='project-page-column'>
          <div className='project-page-bullets'>
            { bullets.map(bullet =>
                          <div>
                            {'→ '}{ bullet }
                          </div>
              )}
          </div>
        </div>
      </div>
      <h1>
        <img className='project-page-image' src={ require(`../Assets/${shortName}.png`) } alt={`${title} screenshot`}/>
      </h1>
    </div>
  )
};

export default Earworm;