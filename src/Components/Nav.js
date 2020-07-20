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
    <nav>
      STEPHEN KEATING
      <a href="https://www.linkedin.com/in/stephenmkeating/">LinkedIn</a>
      <a href="https://github.com/stephenkeating/">GitHub</a>
      {/* <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link> */}
    </nav>
  );
};

export default Nav;