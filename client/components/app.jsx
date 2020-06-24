import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './nav';
import Shop from './shop';
import About from './about';
import Blog from './blog';

const App = () => (
  <Router>
    <div className="App">
      <h2>
        Carlitos Willis
      </h2>
      <Nav />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/shop" component={Shop} />
    </div>
  </Router>
);

export default App;
