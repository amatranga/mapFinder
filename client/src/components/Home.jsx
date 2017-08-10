import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './Splash.jsx';
import OAuth from './OAuth.jsx';
import Menu from './Menu.jsx';

const Home = () => {
  const user = window.user;

  if (!user) {
    return (
      <div>
        <div className="row justify-content-center">
          <Splash />
          <OAuth />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center">
        <Splash />
        <Menu />
      </div>
    );
  }
};

export default Home;
