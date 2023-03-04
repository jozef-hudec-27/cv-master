import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default class SkillsEntry extends Component {
  render() {
    const { skill, removeSkill } = this.props

    return (
      <div className="skills-entry">
        <p>{skill}</p>

        <button style={{ backgroundColor: 'inherit', color: 'grey', marginTop: 'unset' }}>
          <FontAwesomeIcon icon={faXmark} onClick={removeSkill} />
        </button>
      </div>
    )
  }
}
