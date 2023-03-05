import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function WorkExperienceEntry(props) {
  const { from, to, company, position, description, removeWorkExperience } = props

  return (
    <div className="work-experience-entry">
      <div className="header">
        <FontAwesomeIcon icon={faChevronRight} />

        <div>
          <h3>{position}</h3>
          <p>{company}</p>
        </div>

        <p>{`${from} - ${to}`}</p>
      </div>

      <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginTop: '8px' }}>
        <p className="description">{description}</p>

        <button
          style={{ color: 'rgb(61, 66, 64)', backgroundColor: 'white' }}
          onClick={removeWorkExperience}
          aria-label="Remove work experience"
        >
          {<FontAwesomeIcon icon={faXmark} />}
        </button>
      </div>
    </div>
  )
}
