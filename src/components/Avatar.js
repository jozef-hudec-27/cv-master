import React, { Component } from 'react'
import avatar from '../avatar.png'

export default class Avatar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageSrc: avatar,
    }

    this.handleImageChange = this.handleImageChange.bind(this)
    this.inputRef = React.createRef()
  }

  handleImageChange(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.setState({
        imageSrc: reader.result,
      })
    }
  }

  render() {
    return (
      <div>
        <img
          tabIndex="0"
          src={this.state.imageSrc}
          alt="avatar"
          onClick={() => this.inputRef.current.click()}
          onKeyDown={(e) => {
            if (e.code === 'Tab') return

            e.preventDefault()

            if (['Enter', 'Space'].includes(e.code)) this.inputRef.current.click()
          }}
        />
        <input type="file" ref={this.inputRef} style={{ display: 'none' }} onChange={this.handleImageChange} />
      </div>
    )
  }
}
