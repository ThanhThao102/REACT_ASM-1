import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2 className="title2">Professional Skills</h2>
        <div className="box">
          <h4>Html</h4>
          <div className="percent">
          <div style={{ width: "70%" }} />
          </div>
        </div>
        <div className="box">
          <h4>CSS</h4>
          <div className="percent">
          <div style={{ width: "70%" }} />
          </div>
        </div>
        <div className="box">
          <h4>Javascript</h4>
          <div className="percent">
          <div style={{ width: "70%" }} />
          </div>
        </div>
        <div className="box">
          <h4>React</h4>
          <div className="percent">
          <div style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    )
  }
}
