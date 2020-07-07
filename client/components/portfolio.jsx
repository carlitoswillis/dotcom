import React from 'react';
import PModal from './pmodal';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pfolio">
        <PModal title="silentSHOUT" info="A private chat app for secure communication. Includes automatic chat clearing and a long term pinning option for important and less private messages." img="ss.png" lnk="https://github.com/carlitoswillis/silentShout" />
        <PModal title="silentSHOUT" info="A private chat app for secure communication. Includes automatic chat clearing and a long term pinning option for important and less private messages." img="ss.png" lnk="https://github.com/carlitoswillis/silentShout" />
        <PModal title="silentSHOUT" info="A private chat app for secure communication. Includes automatic chat clearing and a long term pinning option for important and less private messages." img="ss.png" lnk="https://github.com/carlitoswillis/silentShout" />
      </div>
    );
  }
}

export default Portfolio;
