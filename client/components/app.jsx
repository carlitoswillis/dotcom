import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './nav';
import Resume from './resume';
import About from './about';
import Blog from './blog';
import Portfolio from './portfolio';
import Modal from './modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const { show } = this.state;
    return (
      <Router>
        {show
          ? (
            <div onClick={() => this.setState({ show: false })} className="fullScreenNav">
              <div className="fullNavMenu">
                <h1 className="titleThree">
                  <a className="classy" href="/">
                    carlitos willis | software engineer
                  </a>
                </h1>
                <Nav classy="classy" />
              </div>
            </div>
          )
          : <div />}
        <div className="homeDiv">
          <div className="introToo">
            <h1 className="titleTwo">
              <a href="/">
                carlitos willis | software engineer
              </a>
            </h1>
          </div>
          <div className="intro">
            <div
              onClick={() => {
                this.setState({
                  show: !show,
                });
              }}
              className="hamburger"
            >
              <div className="line" />
              <div className="line linetoo" />
              <div className="line" />
              <div className="line linetoo" />
              <div className="line" />
            </div>
            <div className="menuSplit">
              <h1 className="title">
                <a href="/">
                  carlitos willis | software engineer
                </a>
              </h1>
              <Nav />
            </div>
          </div>
          <Switch>

            <Route path="/about" component={About} />
            {/* <Route path="/resume" component={Resume} /> */}
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={About} />
            {/* <Route path="/">
              <div className="home">
                <div className="profile">
                  <a href="/about">
                    <img className="profpic" src="images/profile.jpg" alt="me" />
                  </a>
                </div>
                <div className="fields">
                  <Modal img="se.jpeg" field="Software Engineer" info="I am a great software engineer as you can see by this site" />
                  <Modal img="smma.jpeg" field="Digital Marketer" info="I run very dope ads" />
                  <Modal img="push.jpg" field="Music Producer" info="I make very nice musics" />
                </div>
              </div>
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
