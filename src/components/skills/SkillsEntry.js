import React, { Component } from 'react'

export default class SkillsEntry extends Component {
  render() {
    const { skill } = this.props

    return (
      <div className="skills-entry">
        <p>{skill}</p>
      </div>
    )
  }
}
