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
      <button
        onClick={handleImageClick}
        style={{ appearance: 'none', border: 'none', background: 'transparent', borderRadius: '999px' }}
      >
        <img src={imageSrc} alt="avatar" />
      </button>
      <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageChange} />
    </div>
  )
}
