import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginModal from '../LoginModal/LoginModal';
const Navbar = (props) => {
  const renderContent = () => {
    switch (props.user) {
      case null:
        return <a href='/'>Loading</a>;
      case false:
        return (
          <>
            <LoginModal />
          </>
        );

      default:
        return (
          <>
            <Link to={`/profile/todo/${props.user._id}`}>Todo</Link>
            <Link to={`/profile/${props.user._id}`}>Profile</Link>
            <a href='/api/logout'>Logout</a>
          </>
        );
    }
  };
  return (
    <div>
      <nav className='nav navbar bg-dark text-primary d-flex justify-content-around'>
        <Link to='/questions'>Questions Page</Link>
        <Link to='/projects'>Projects</Link>

        <Link to='/'>Home</Link>
        {renderContent()}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps)(Navbar);