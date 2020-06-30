import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './nav';
import Shop from './shop';
import About from './about';
import Blog from './blog';
import Portfolio from './portfolio';

const App = () => (
  <Router>
    <div>
      <div className="intro">
        <Nav />
      </div>
      <Switch>

        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/shop" component={Shop} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/">
          <div className="home">
            <div className="profile">
              <img className="profpic" src="images/profile.jpg" alt="me" />
            </div>
            <div className="shortAbout">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
              It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages,
              and more recently
              with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="fields">
              <div className="field">
                <img src="images/se.jpeg" alt="thing i do" />
                <div className="pair">
                  <h2>
                    Thing I do
                  </h2>
                  <p>
                    background info i suppose
                  </p>
                </div>
              </div>
              <div className="field">
                <img src="images/smma.png" alt="thing i do" />
                <div className="pair">
                  <h2>
                    Thing I do 2
                  </h2>
                  <p>
                    background info i suppose 2
                  </p>
                </div>
              </div>
              <div className="field">
                <img src="images/push.jpg" alt="thing i do" />
                <div className="pair">
                  <h2>
                    Thing I do 3
                  </h2>
                  <p>
                    background info i suppose 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
