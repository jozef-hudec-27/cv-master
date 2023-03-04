import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import WorkExperienceEntry from './WorkExperienceEntry'
import EntryForm from '../EntryForm'

export default class WorkExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workExperienceList: [],
    }

    this.addWorkExperience = this.addWorkExperience.bind(this)
  }

  addWorkExperience(workExperience) {
    this.setState((prevState, _) => {
      const newWorkExperienceList = [...prevState.workExperienceList, workExperience]
      return { workExperienceList: newWorkExperienceList }
    })
  }

  removeWorkExperience(index) {
    this.setState((prevState, _) => {
      const newWorkExperienceList = [...prevState.workExperienceList]
      newWorkExperienceList.splice(index, 1)
      return { workExperienceList: newWorkExperienceList }
    })
  }

  render() {
    const { workExperienceList } = this.state
    const workExperienceEntryFields = [
      { label: 'Company', type: 'text', name: 'company' },
      { label: 'Title', type: 'text', name: 'title' },
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
              title={entry.title}
              description={entry.description}
              removeWorkExperience={() => this.removeWorkExperience(i)}
            />
          ))}

          <EntryForm fields={workExperienceEntryFields} onSubmit={this.addWorkExperience} title="Work experience" />
        </div>
      </section>
    )
  }
}
