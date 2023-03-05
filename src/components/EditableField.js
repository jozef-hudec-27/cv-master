import React, { useState } from 'react'

export default function EditableField(props) {
  const { label, inputType } = props
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(props.value)

  const handleStartEditing = () => setIsEditing(true)

  const handleFinishEditing = () => setIsEditing(false)

  const handleChange = (event) => setValue(event.target.value)

  if (isEditing) {
    return (
      <div>
        {props.isTextarea ? (
          <textarea value={value} onBlur={handleFinishEditing} onChange={handleChange} autoFocus></textarea>
        ) : (
          <input type={inputType} value={value} onBlur={handleFinishEditing} onChange={handleChange} autoFocus />
        )}
      </div>
    )
  }

  return (
    <span
      onClick={handleStartEditing}
      onKeyDown={(e) => {
        if (e.code === 'Tab') return

        e.preventDefault()

        if (['Enter', 'Space'].includes(e.code)) handleStartEditing()
      }}
      tabIndex="0"
    >
      {value || label}
    </span>
  )
}
