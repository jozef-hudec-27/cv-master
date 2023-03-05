import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import WorkExperienceEntry from './WorkExperienceEntry'
import EntryForm from '../EntryForm'

const WorkExperience = () => {
  const [workExperienceList, setWorkExperienceList] = useState([])

  const addWorkExperience = (workExperience) => {
    setWorkExperienceList((prevWorkExperienceList) => [...prevWorkExperienceList, workExperience])
  }

  const removeWorkExperience = (index) => {
    setWorkExperienceList((prevWorkExperienceList) => {
      const newWorkExperienceList = [...prevWorkExperienceList]
      newWorkExperienceList.splice(index, 1)
      return newWorkExperienceList
    })
  }

  const workExperienceEntryFields = [
    { label: 'Company', type: 'text', name: 'company' },
    { label: 'Position', type: 'text', name: 'position' },
    { label: 'Description', type: 'text', name: 'description' },
    { label: 'From', type: 'number', name: 'from', min: '1900', max: new Date().getFullYear() },
    { label: 'To', type: 'number', name: 'to', min: '1900', max: new Date().getFullYear() },
  ]

  return (
    <section id="work-experience">
      <h2>
        <FontAwesomeIcon icon={faBriefcase} />
        Work experience
      </h2>

      <div className="work-experience-entries">
        {workExperienceList.map((entry, i) => (
          <WorkExperienceEntry
            key={i}
            from={entry.from}
            to={entry.to}
            company={entry.company}
            position={entry.position}
            description={entry.description}
            removeWorkExperience={() => removeWorkExperience(i)}
          />
        ))}

        <EntryForm fields={workExperienceEntryFields} onSubmit={addWorkExperience} title="Work experience" />
      </div>
    </section>
  )
}

export default WorkExperience
