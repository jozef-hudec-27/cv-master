import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import SkillsEntry from './SkillsEntry'

export default class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <h2>
          <FontAwesomeIcon icon={faLaptop} />
          Skills
        </h2>

        <div className="skills-entries">
          <SkillsEntry skill="Graphic design" />
          <SkillsEntry skill="Web design" />
          <SkillsEntry skill="Video editing" />
          <SkillsEntry skill="Branding" />
          <SkillsEntry skill="Photography" />
          <SkillsEntry skill="Marketing" />
        </div>
      </section>
    )
  }
}
