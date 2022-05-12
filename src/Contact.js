import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contactInfo">
        <h3 className="title">Contact Info</h3>
          <ul>
            <li>
              <span className="icon">
                <i className="fa fa-phone" aria-hidden="true" />
              </span>
              <span className="text">+84 344 479 118</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
              <span className="text">vothithanhthao102@gmail.com</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
              </span>
              <span className="text">Thu Duc, Ho Chi Minh City</span>
            </li>
          </ul>
      </div>
    )
  }
}
