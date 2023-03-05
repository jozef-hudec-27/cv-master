import React, { useRef, useState } from 'react'
import avatar from '../avatar.png'

export default function Avatar() {
  const inputRef = useRef(null)
  const [imageSrc, setImageSrc] = useState(avatar)

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImageSrc(reader.result)
    }
  }

  const handleImageClick = () => {
    inputRef.current.click()
  }

  return (
    <div>
      <img
        tabIndex="0"
        src={imageSrc}
        alt="avatar"
        onClick={handleImageClick}
        onKeyDown={(e) => {
          if (e.code === 'Tab') return

          e.preventDefault()

          if (['Enter', 'Space'].includes(e.code)) handleImageClick()
        }}
      />
      <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageChange} />
    </div>
  )
}
