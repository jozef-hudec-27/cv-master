import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import SkillsEntry from './SkillsEntry'
import EntryForm from '../EntryForm'

export default class Skills extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skillsList: [],
    }

    this.addSkill = this.addSkill.bind(this)
  }

  addSkill(skill) {
    this.setState((prevState, _) => {
      const newSkillsList = [...prevState.skillsList, skill]
      return { skillsList: newSkillsList }
    })
  }

  removeSkill(index) {
    this.setState((prevState, _) => {
      const newSkillsList = [...prevState.skillsList]
      newSkillsList.splice(index, 1)
      return { skillsList: newSkillsList }
    })
  }

  render() {
    const { skillsList } = this.state
    const skillsEntryFields = [{ label: 'Skill', type: 'text', name: 'skill' }]

    return (
      <section id="skills">
        <h2>
          <FontAwesomeIcon icon={faLaptop} />
          Skills
        </h2>

        <div className="skills-entries">
          <EntryForm fields={skillsEntryFields} onSubmit={this.addSkill} title="Skills" />

          {skillsList.map((entry, i) => (
            <SkillsEntry key={i} skill={entry.skill} removeSkill={() => this.removeSkill(i)} />
          ))}
        </div>
      </section>
    )
  }
}
