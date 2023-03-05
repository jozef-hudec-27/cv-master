import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import EducationEntry from './EducationEntry'
import EntryForm from '../EntryForm'

export default function Education() {
  const [educationList, setEducationList] = useState([])

  const addEducation = (education) => {
    setEducationList((prevEducationList) => [...prevEducationList, education])
  }

  const removeEducation = (index) => {
    setEducationList((prevEducationList) => {
      const newEducationList = [...prevEducationList]
      newEducationList.splice(index, 1)
      return newEducationList
    })
  }

  const educationEntryFields = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'From', type: 'number', name: 'from', min: '1900', max: new Date().getFullYear() },
    { label: 'To', type: 'number', name: 'to', min: '1900', max: new Date().getFullYear() },
  ]

  return (
    <section id="education">
      <h2>
        <FontAwesomeIcon icon={faBook} /> Education
      </h2>

      <div className="education-entries">
        {educationList.map((entry, i) => (
          <EducationEntry
            key={i}
            from={entry.from}
            to={entry.to}
            name={entry.name}
            removeEducation={() => removeEducation(i)}
          />
        ))}

        <EntryForm fields={educationEntryFields} onSubmit={addEducation} title="Education" />
      </div>
    </section>
  )
}
