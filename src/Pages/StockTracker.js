import React, { useEffect } from 'react';
import projects from '../Data/projects.json';

const StockTracker = () => {

  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)

  }, []);

  const {title, url, description, tech, bullets, github, shortName} = projects[2]

  return (
    <div className='project-page'>
      <h1 className='product-page-title'>
        <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      </h1>
      <div className='project-page-body'>
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
          </div>
          <div className='project-page-column'>
            <div className='project-page-bullets'>
              { bullets.map((bullet, i) =>
                            <div key={i}>
                              {'→ '}{ bullet }
                            </div>
                )}
            </div>
          </div>
        </div>
        <h1>
          <img className='project-page-image' src={ require(`../Assets/${shortName}.png`) } alt={`${title} screenshot`}/>
        </h1>
        <div className='project-page-tech'>
                {'Tech used: '}
                <br></br>
                { tech.map((t, i) =>
                            <span key={i}>
                              { (i ? ' | ': '') + t }
                            </span>
                )}
        </div>
      </div>
    </div>
  )
};

export default StockTracker;