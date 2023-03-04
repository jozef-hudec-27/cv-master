import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import EducationEntry from './EducationEntry'
import EntryForm from '../EntryForm'

export default class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      educationList: [],
    }

    this.addEducation = this.addEducation.bind(this)
  }

  addEducation(education) {
    this.setState((prevState, _) => {
      const newEducationList = [...prevState.educationList, education]
      return { educationList: newEducationList }
    })
  }

  removeEducation(index) {
    this.setState((prevState, _) => {
      const newEducationList = [...prevState.educationList]
      newEducationList.splice(index, 1)
      return { educationList: newEducationList }
    })
  }

  render() {
    const { educationList } = this.state
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
              removeEducation={() => this.removeEducation(i)}
            />
          ))}

          <EntryForm fields={educationEntryFields} onSubmit={this.addEducation} title="Education" />
        </div>
      </section>
    )
  }
}
