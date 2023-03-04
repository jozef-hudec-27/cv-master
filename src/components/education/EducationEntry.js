import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'

export default class EducationEntry extends Component {
  render() {
    const { from, to, name, removeEducation } = this.props

    return (
      <div className="education-entry">
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faChevronRight} />

          <div>
            <h3>{name}</h3>
            <p>{`${from} - ${to}`}</p>
          </div>
        </div>

        <button
          style={{ backgroundColor: 'rgb(61, 66, 64)', color: 'white' }}
          onClick={removeEducation}
          aria-label="Remove education entry"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    )
  }
}
