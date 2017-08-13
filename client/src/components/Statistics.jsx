import React from 'react';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Statistics</h1>
        <div className="row text-center">
          <h4>Stat</h4>
          <h4>Value</h4>
        </div>
      </div>
    );
  }
};

export default Statistics;
