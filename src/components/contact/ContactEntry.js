import React from 'react'
import EditableField from '../EditableField'

export default function ContactEntry(props) {
  const { icon, title, value } = props

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
