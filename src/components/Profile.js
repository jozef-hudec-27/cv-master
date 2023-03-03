import React, { Component } from 'react'
import Avatar from '../avatar.jpg'

export default class Profile extends Component {
  render() {
    return (
      <section id="profile">
        <img src={Avatar} alt="avatar" />

        <div>
          <h1>
            <span>John</span> <span>Doe</span>
          </h1>
          <p>Front-end developer</p>
        </div>
      </section>
    )
  }
}
