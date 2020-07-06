import React from 'react';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {new Array(10).fill(0).map(x => (<div>empty</div>))}
      </div>
    );
  }
}

export default Portfolio;
