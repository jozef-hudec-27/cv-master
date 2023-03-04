import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

export default class EntryForm extends Component {
  constructor(props) {
    super(props)
    const { fields } = props

    this.state = {
      isFormVisible: false,
      fields: fields.reduce((state, field) => {
        return { ...state, [field.name]: '' }
      }, {}),
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const { onSubmit } = this.props
    onSubmit(this.state.fields)
    this.setState((state) => ({
      isFormVisible: false,
      fields: Object.keys(state.fields).reduce((newFields, key) => {
        return { ...newFields, [key]: '' }
      }, {}),
    }))
  }

  handleChange(event) {
    const { name, value } = event.target

    this.setState((state) => ({
      fields: { ...state.fields, [name]: value },
    }))
  }

  toggleFormVisibility() {
    this.setState((state) => ({
      isFormVisible: !state.isFormVisible,
    }))
  }

  render() {
    const { fields, isFormVisible } = this.state
    const { fields: formFields, title } = this.props

    if (!isFormVisible) {
      return (
        <button onClick={this.toggleFormVisibility} aria-label={`Add ${title}`}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )
    }

    return (
      <form className="new-entry-form" onSubmit={this.handleSubmit}>
        {formFields.map((field, i) => (
          <div key={i}>
            <label>
              {field.label}:
              <input
                type={field.type}
                name={field.name}
                value={fields[field.name]}
                onChange={this.handleChange}
                required
                {...field}
              />
            </label>
          </div>
        ))}

        <div>
          <button type="submit" aria-label={`Submit  ${title} form`}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            type="button"
            onClick={() => {
              this.toggleFormVisibility()
              this.setState((state) => ({
                fields: Object.keys(state.fields).reduce((newFields, key) => {
                  return { ...newFields, [key]: '' }
                }, {}),
              }))
            }}
            aria-label={`Cancel  ${title} form`}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </form>
    )
  }
}
