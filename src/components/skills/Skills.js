import React, { useState } from 'react'
import SkillsEntry from './SkillsEntry'
import EntryForm from '../EntryForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

export default function Skills() {
  const [skillsList, setSkillsList] = useState([])

  const addSkill = (skill) => {
    setSkillsList((prevSkillsList) => [...prevSkillsList, skill])
  }

  const removeSkill = (index) => {
    setSkillsList((prevSkillsList) => {
      const newSkillsList = [...prevSkillsList]
      newSkillsList.splice(index, 1)
      return newSkillsList
    })
  }

  const skillsEntryFields = [{ label: 'Skill', type: 'text', name: 'skill' }]

  return (
    <section id="skills">
      <h2>
        <FontAwesomeIcon icon={faLaptop} />
        Skills
      </h2>

      <div className="skills-entries">
        <EntryForm fields={skillsEntryFields} onSubmit={addSkill} title="Skills" />

        {skillsList.map((entry, i) => (
          <SkillsEntry key={i} skill={entry.skill} removeSkill={() => removeSkill(i)} />
        ))}
      </div>
    </section>
  )
}
