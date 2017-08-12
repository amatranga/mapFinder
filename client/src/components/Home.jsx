import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './Splash.jsx';
import OAuth from './OAuth.jsx';
import Menu from './Menu.jsx';
import Description from './Description.jsx';

const LoggedOutImgStyle = {
  background: 'url(/assets/vintage.jpg) no-repeat center',
  maxWidth: '100%',
  height: '38em'
};

const LoggedInImgStyle = {
  background: 'url(/assets/vintage.jpg) no-repeat center',
  maxWidth: '100%'
}

const Home = () => {
  const user = window.user;

  if (!user) {
    return (
      <div>
        <div className="col justify-content-center" style={LoggedOutImgStyle}>
          <Splash />
          <br />
          <Description />
          <br />
          <OAuth />
          <br />
        </div>
      </div>
    );
  } else {
    return (
      <div className="col justify-content-center" style={LoggedInImgStyle}>
        <Splash />
        <br />
        <Menu />
        <br />
      </div>
    );
  }
};

export default Home;
