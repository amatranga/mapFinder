import React from 'react';

const textStyle = {
  padding: '1em',
  fontWeight: 'bold',
  fontSize: '1.60em',
  color: '#222'
};

const Description = () => {
  return (
    <div className="col">
      <span className="text-center" style={textStyle}>
        <h3> Welcome to MapFinder! </h3>
        <h3> Start with a blank map, </h3>
        <h3> and uncover more as you travel! </h3>
      </span>
    </div>
  );
}

export default Description;
