import React from 'react';
import Block from './block';

const About = () => (
  <div className="home">
    <div className="aboutDiv">
      <div className="profile">
        <a href="/about">
          <img className="profpic" src="images/profile.jpg" alt="me" />
        </a>
      </div>
      <div className="aboutText">
        <p>
          I’m a Full Stack Engineer with extensive experience with JavaScript and Node.js as well as a long history of solving a variety of business problems with JavaScript and Python.
        </p>
        <p>
          I've helped creatives and organizations (namely, musical creatives) with many business needs over the last few years while diving deeper into software engineering solutions– from writing scripts to learning how social networks use machine learning to enhance their advertising platforms.
        </p>
        <p>
          When I’m not on the job, I love making music, writing quick one-off apps, and helping my friends and clients with their own creative endeavors– and integrating all the above!
          {' '}
        </p>
        <p>
          {' '}
          If you’d like to talk about your company&apos;s software engineer needs, please reach out via email
          <a className="aboutText" href="mailto:cw@carlitoswillis.com">(cw@carlitoswillis.com).</a>
          {' '}
        </p>
      </div>
      <div className="skills">
        <Block info="JavaScript (ES5/ES6), React, Redux, jQuery, CSS (3) / CSS Modules, HTML (5), Styled-Components, Chart.js" color="red" title="Front End" />
        <Block
          info="PostgreSQL, Node.js, Express, Nginx, MySQL, MongoDB, Mongoose, AWS (CLI, EC2, S3, RDS), Apache Cassandra, Python, Socket.IO

"
          color="blue"
          title="Back End"
        />
        <Block
          info="Git, Webpack, Babel, Grunt, Docker, Heroku, New Relic, npm, yarn, Trello, Asana, ESLint, CircleCI, Selenium, Jest, Enzyme, Mocha, Chai

"
          color="yellow"
          title="Tools"
        />
        <Block info="Schema Design, Agile Practices, Test Driven Development, Continuous Deployment, Feature Branch Workflow" color="green" title="Etc." />
      </div>
      <p className="toolkit">
        Front-End: JavaScript (ES5/ES6), React, Redux, jQuery, CSS (3) / CSS Modules, HTML (5), Styled-Components, Chart.js
      </p>
      <p className="toolkit">
        Back-End: PostgreSQL, Node.js, Express, Nginx, MySQL, MongoDB, Mongoose, AWS (CLI, EC2, S3, RDS), Apache Cassandra, Python, Socket.IO
        {' '}
      </p>
      <p className="toolkit">
        Tools: Git, Webpack, Babel, Grunt, Docker, Heroku, New Relic, npm, yarn, Trello, Asana, ESLint, CircleCI, Selenium, Jest, Enzyme, Mocha, Chai
        {' '}
      </p>
      <p className="toolkit">
        Techniques: Schema Design, Agile Practices, Test Driven Development, Continuous Deployment, Feature Branch Workflow
      </p>
    </div>
  </div>
);

export default About;
