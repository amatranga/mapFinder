import React from 'react';
import MyMapButton from './MyMapButton.jsx';
import AchievementsButton from './AchievementsButton.jsx';
import StatisticsButton from './StatisticsButton.jsx';
import SettingsButton from './SettingsButton.jsx';
import LogoutButton from './LogoutButton.jsx';

const textStyle = {
  padding: '1em',
  fontWeight: 'bold',
  fontSize: '1.60em',
  color: '#222'
};

const Menu = () => {
  return (
    <div className="col">
      <span className="text-center">
        <a href="/myMap" style={textStyle}><p>My Map</p></a>
        <a href="/achievements" style={textStyle}><p>Achievements</p></a>
        <a href="/statistics" style={textStyle}><p>Statistics</p></a>
        <a href="/settings" style={textStyle}><p>Settings</p></a>
        <a href="/logout" style={textStyle}><p>Logout</p></a>
      </span>
    </div>
  );
}

export default Menu;
