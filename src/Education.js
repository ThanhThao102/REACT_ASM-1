import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <h3 className="title">Education</h3>
          <ul>
            <li>
              <h5>2014 - 2018</h5>
              <h4> Bachelor in English Language</h4>
              <h4>Hutech University</h4>
            </li>
          </ul>
      <br /> <br />

      <div className="language">
        <h3 className="title">Languages</h3>
          <ul>
            <li>
              <span className="text">English</span>
              <span className="percent">
                <div style={{ width: "70%" }} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

