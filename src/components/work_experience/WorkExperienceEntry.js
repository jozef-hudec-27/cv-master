import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'

export default class WorkExperienceEntry extends Component {
  render() {
    const { from, to, company, title, description, removeWorkExperience } = this.props

    return (
      <div className="work-experience-entry">
        <div className="header">
          <FontAwesomeIcon icon={faChevronRight} />

          <div>
            <h3>{title}</h3>
            <p>{company}</p>
          </div>

          <p>{`${from} - ${to}`}</p>
        </div>

        <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginTop: '8px' }}>
          <p className="description">{description}</p>

          <button style={{ color: 'rgb(61, 66, 64)', backgroundColor: 'white' }} onClick={removeWorkExperience}>
            {<FontAwesomeIcon icon={faXmark} />}
          </button>
        </div>
      </div>
    )
  }
}
