import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function EntryForm(props) {
  const { fields: formFields, title, onSubmit } = props
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [fields, setFields] = useState(
    formFields.reduce((state, field) => {
      return { ...state, [field.name]: '' }
    }, {})
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(fields)
    setIsFormVisible(false)
    setFields(
      Object.keys(fields).reduce((newFields, key) => {
        return { ...newFields, [key]: '' }
      }, {})
    )
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFields((prevState) => ({ ...prevState, [name]: value }))
  }

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState)
  }

  if (!isFormVisible) {
    return (
      <button onClick={toggleFormVisibility} aria-label={`Add ${title}`}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    )
  }

  return (
    <form className="new-entry-form" onSubmit={handleSubmit}>
      {formFields.map((field, i) => (
        <div key={i}>
          <label>
            {field.label}:
            <input
              type={field.type}
              name={field.name}
              value={fields[field.name]}
              onChange={handleChange}
              required
              {...field}
            />
          </label>
        </div>
      ))}

      <div>
        <button type="submit" aria-label={`Submit ${title} form`}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          type="button"
          onClick={() => {
            toggleFormVisibility()
            setFields(
              Object.keys(fields).reduce((newFields, key) => {
                return { ...newFields, [key]: '' }
              }, {})
            )
          }}
          aria-label={`Cancel ${title} form`}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </form>
  )
}
