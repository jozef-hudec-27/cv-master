import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import WorkExperienceEntry from './WorkExperienceEntry'

export default class WorkExperience extends Component {
  render() {
    return (
      <section id="work-experience">
        <h2>
          <FontAwesomeIcon icon={faBriefcase} />
          Work experience
        </h2>

        <div className="work-experience-entries">
          <WorkExperienceEntry from="2009" to="2010" company="Google" title="Junior Software engineer" />
          <WorkExperienceEntry from="2010" to="2014" company="Facebook" title="Data analyst" />
          <WorkExperienceEntry from="2015" to="NOW" company="Microsoft" title="Senior software engineer" />
        </div>
      </section>
    )
  }
}
