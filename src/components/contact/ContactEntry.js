import React, { Component } from 'react'

export default class ContactEntry extends Component {
  render() {
    const { icon, title, value } = this.props

    return (
      <div className="contact-entry">
        {icon}

        <div>
          <h3>{title}</h3>
          <p>{value}</p>
        </div>
      </div>
    )
  }
}
