import React, { Component } from 'react'

export default class EditableField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      value: props.value,
    }
  }

  handleStartEditing = () => {
    this.setState({ isEditing: true })
  }

  handleFinishEditing = () => {
    this.setState({ isEditing: false })
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { isEditing, value } = this.state
    const { label, inputType } = this.props

    if (isEditing) {
      return (
        <div>
          {this.props.isTextarea ? (
            <textarea value={value} onBlur={this.handleFinishEditing} onChange={this.handleChange} autoFocus></textarea>
          ) : (
            <input
              type={inputType}
              value={value}
              onBlur={this.handleFinishEditing}
              onChange={this.handleChange}
              autoFocus
            />
          )}
        </div>
      )
    }

    return (
      <span
        onClick={this.handleStartEditing}
        onKeyDown={(e) => {
          if (e.code === 'Tab') return

          e.preventDefault()

          if (['Enter', 'Space'].includes(e.code)) {
            this.handleStartEditing()
          }
        }}
        tabIndex="0"
      >
        {value || label}
      </span>
    )
  }
}
