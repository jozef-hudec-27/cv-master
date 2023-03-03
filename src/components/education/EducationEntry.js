import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default class ContactEntry extends Component {
  render() {
    const { from, to, name } = this.props

    return (
      <div className="contact-entry">
        <FontAwesomeIcon icon={faChevronRight} />

        <div>
          <h3>{name}</h3>
          <p>{`${from} - ${to}`}</p>
        </div>
      </div>
    )
  }
}
