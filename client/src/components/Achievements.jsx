import React from 'react';

class Achievements extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Achievements</h1>
        <div className="row text-center">
          <h4>Achievement</h4>
          <h4>Date Earned</h4>
          <div>
            <p>A list of achievements will go here</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Achievements;
