import React from 'react';
import MyMapButton from './buttons/MyMapButton.jsx';
import AchievementsButton from './buttons/AchievementsButton.jsx';
import StatisticsButton from './buttons/StatisticsButton.jsx';
import SettingsButton from './buttons/SettingsButton.jsx';
import LogoutButton from './buttons/LogoutButton.jsx';

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
