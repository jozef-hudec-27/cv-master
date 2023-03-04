import React, { Component } from 'react'
import EditableField from '../EditableField'

export default class ContactEntry extends Component {
  render() {
    const { icon, title, value } = this.props

    return (
      <div className="contact-entry">
        {icon}

        <div>
          <h3>{title}</h3>
          <EditableField label={title} value={value} inputType="text" />
        </div>
      </div>
    )
  }
}
