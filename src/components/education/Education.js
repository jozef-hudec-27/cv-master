import React, { Component } from 'react'
import EducationEntry from './EducationEntry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default class Education extends Component {
  render() {
    return (
      <section id="education">
        <h2>
          <FontAwesomeIcon icon={faBook} /> Education
        </h2>

        <div className="education-entries">
          <EducationEntry from="2000" to="2005" name="MIT" />
          <EducationEntry from="2006" to="2009" name="Harvard University" />
        </div>
      </section>
    )
  }
}
