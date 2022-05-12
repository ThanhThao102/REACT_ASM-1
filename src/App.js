import './App.css';

import React, {Component} from 'react';
import Header from './Header.js';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}

render () {
  return (
    <div className="container">
      <div className="left_Side">
        <Header/>
          
        <Contact/>
        <br /> <br />

        <Education/>
       
      </div>
      <div className="right_Side">
        <div className="about">
          <h2 className="title2">Profile</h2>
          <p>
            I have a positive mind and good ability to adapt and create stable
            environment around me.
            <br /> <br /> I am eager to learn, to be challenged in order to grow
            professionally and further improve my dev skills. I am currently looking
            for an opportunity to utilize my dev skills in a challenging working
            environment and be come a valuable asset to the organization that I work
            for.
          </p>
        </div>

        <Experience/>

        <Skills/>

      </div>
    </div>
    );
  }
}

