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
        <PModal title="silentSHOUT" info="A private chat app for secure communication. Includes automatic chat clearing and a long term pinning option for important and less private messages." img="ss.png" lnk2="https://github.com/carlitoswillis/silentShout" lnk1="http://carlitoswillis.com:3000/" />
        <PModal title="This Website" info="Written with mostly JavaScript– a single page Node.js and React app with MySQL and an Express server" img="react.png" lnk1="https://github.com/carlitoswillis/dotcom" />
        <PModal title="Ezzy Shop" info="While working with a group of engineers and utilizing microservices to segment an e-commerce site into modular compenents, I handled scaling up the reviews section / component which renders all the reviews of different products– with details about the review, the reviewer, the product, and the shop" img="e.jpeg" lnk1="https://github.com/Team-Sauron-SDC/Ezzy-Shop-Reviews" />
      </div>
    );
  }
}

export default Portfolio;
