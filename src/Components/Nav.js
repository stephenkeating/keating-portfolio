import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import userActions from '../redux/actions';

const Nav = () => {
  // const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch(userActions.logoutUser());
  // };
  return (
    <nav className='nav'>
      <div className='nav-link'>
        <a href="https://learn.co/stephenmk/resume" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <div className='nav-link'>
        <a href="https://www.linkedin.com/in/stephenmkeating/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className='nav-title'>
        <Link to="/">STEPHEN KEATING</Link>
      </div>
      <div className='nav-link'>
        <a href="https://github.com/stephenkeating/" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className='nav-link'>
        <a href="mailto:stephen.keating@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
      </div>
    </nav>
  );
};

export default Nav;