import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx';

const Dashboard = () => {
  return (
    <div className="row justify-content-center">
      <div className="col text-center">
        <Menu />
      </div>
    </div>
  );
}

export default Dashboard;
