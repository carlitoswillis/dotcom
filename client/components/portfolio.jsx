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
        <PModal title="" info="This is the perfect tool for someone looking to discover rising talent in the music industry. Marketers, A&Rs, Prodycers – anybody looking to help an artist break through will find this tool invaluable. Just search up an artist and it'll show you smaller related recording artists." lnk1="http://www.carlitoswillis.com:5000" lnk2="https://github.com/carlitoswillis/artistDiscovery" img="artistdiscovery.png" />
        <PModal title="" info="This visually simple search is powered by the user's own database of research, papers, and books. Built with React, Express, Node, mysql, docker [for tesseract], and more, this project uses text recognition + optical character recognition to index the contents of a user's library and ease the researching process." lnk1="http://www.carlitoswillis.com:2020/search?q=Leibniz" lnk2="https://github.com/carlitoswillis/expert" img="expert.png" />
        <PModal title="beatpack" info="This robust desktop application, built with Electron, Node, and React simplifies the 'Type Beat' Music Producer's problem. Simply drag and drop folders with stems, images for cover art, and videos for promotional videos – and this app will turn the media into content and prepare the stems for distrubtion by converting the instrumental to an mp3 file, zipping the stem folder, chopping the video up randomly and overlaying the audio, and then uploading the video to YouTube using their API." lnk2="https://github.com/carlitoswillis/beatpack" img="beatpack.jpg" />
        <PModal title="silentSHOUT" info="A private chat app for secure communication. Includes automatic chat clearing and a long term pinning option for important and less private messages." img="muted.png" lnk2="https://github.com/carlitoswillis/silentShout" lnk1="https://carlitoswillis.com:3000/" />
        <PModal title="Ezzy Shop" info="While working with a group of engineers and utilizing microservices to segment an e-commerce site into modular compenents, I handled scaling up the reviews section / component which renders all the reviews of different products– with details about the review, the reviewer, the product, and the shop" img="e.png" lnk2="https://github.com/Team-Sauron-SDC/Ezzy-Shop-Reviews" />
        <PModal title="auto-audiobook" info="This compact application utilizes Amazon Polly to transform a text file into an AI syntehsized audiobook" img="audiobooks.png" lnk2="https://github.com/carlitoswillis/auto-audiobook" />
        <PModal title="This Site" info="Written with mostly JavaScript– a single page Node.js and React app with MySQL and an Express server" img="site.png" lnk2="https://github.com/carlitoswillis/dotcom" lnk1="https://www.carlitoswillis.com/" />
      </div>
    );
  }
}

export default Portfolio;
