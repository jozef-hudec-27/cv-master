import React, { Component } from 'react'
import ContactEntry from './ContactEntry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <h2>
          <FontAwesomeIcon icon={faUser} /> Contact
        </h2>

        <div className="contact-entries">
          <ContactEntry title="Phone" value="123-456-7890" icon={<FontAwesomeIcon icon={faPhone} />} />
          <ContactEntry title="Email" value="john.doe@example.com" icon={<FontAwesomeIcon icon={faEnvelope} />} />
          <ContactEntry title="Address" value="123 Random St., New York" icon={<FontAwesomeIcon icon={faHouse} />} />
        </div>
      </section>
    )
  }
}
