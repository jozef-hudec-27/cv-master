import React, { Component } from 'react'
import Contact from './contact/Contact'
import Education from './education/Education'
import Profile from './Profile'

export default class Cv extends Component {
  render() {
    return (
      <section id="cv">
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <Profile />
          <Contact />
          <Education />
        </div>

        <div></div>
      </section>
    )
  }
}
