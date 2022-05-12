import logo from './Photo.jpg';

import React, {Component} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
}

render () {
  return (
    <div className="profileText">
      <div className="imgBx">
          <img src={logo}></img>
      </div>
      <h2>
        Thanh Thao Vo
        <br />
        <span>Web Developer</span>
      </h2>
      </div>
     );
  }
}

