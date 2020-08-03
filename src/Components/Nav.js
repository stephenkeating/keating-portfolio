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
        <a href="https://learn.co/stephenmk/resume">Resume</a>
      </div>
      <div className='nav-link'>
        <a href="https://www.linkedin.com/in/stephenmkeating/">LinkedIn</a>
      </div>
      <div className='nav-title'>
        <Link to="/">STEPHEN KEATING</Link>
      </div>
      <div className='nav-link'>
        <a href="https://github.com/stephenkeating/">GitHub</a>
      </div>
      <div className='nav-link'>
        <a href="mailto:stephen.keating@gmail.com">Email</a>
      </div>
    </nav>
  );
};

export default Nav;