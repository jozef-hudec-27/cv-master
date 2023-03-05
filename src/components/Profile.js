import React from 'react'
import EditableField from './EditableField'
import Avatar from './Avatar'

export default function Profile() {
  return (
    <section id="profile">
      <Avatar />

      <div>
        <h1>
          <EditableField label="First Name" inputType="text" value="John" />
          <EditableField label="Last Name" inputType="text" value="Doe" />
        </h1>

        <EditableField label="Occupation" inputType="text" value="Front-end developer" />
      </div>
    </section>
  )
}
