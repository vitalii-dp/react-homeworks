import React, { useState } from 'react'
import './Sticker.css'

function Sticker({sticker, onStickerUpdate, onStickerDelete}) {
  const [stickerContent, setStickerContent] = useState(sticker.content);
  const [stickerPosition, setStickerPosition] = useState({
    x: sticker.xValue,
    y: sticker.yValue
  })

  function changeContent(e) {
    setStickerContent(e.target.value);
  }

  function startDrag(e) {
    document.addEventListener('mousemove', moveTo);

    const shiftX = e.clientX - e.target.getBoundingClientRect().x;
    const shiftY = e.clientY - e.target.getBoundingClientRect().y;

    function moveTo(e) {
      setStickerPosition({
        x: e.clientX - shiftX,
        y: e.clientY - shiftY
      })
    }

    e.target.onmouseup = () => document.removeEventListener('mousemove', moveTo);
  }

  return (
    <div onBlur={onStickerUpdate.bind(null, sticker, stickerContent, stickerPosition)} className="sticker" style={{left: `${stickerPosition.x}px`, top: `${stickerPosition.y}px`}}>
      <div className="container">
        <div className="row">
          <i className="col-2 d-flex align-items-center justify-content-center fas fa-arrows-alt"
            onMouseDown={startDrag}
            onMouseUp={onStickerUpdate.bind(null, sticker, stickerContent, stickerPosition)}>
          </i>
          <header className="col-8 d-flex justify-content-center">Sticker #{sticker.id}</header>
          <i className="col-2 d-flex align-items-center justify-content-center fas fa-trash-alt" onClick={onStickerDelete.bind(null, sticker.id)}></i>
        </div>
      </div>
      <div>
        <textarea value={stickerContent} onChange={changeContent}></textarea>
      </div>
    </div>
  )
}

export default Sticker
