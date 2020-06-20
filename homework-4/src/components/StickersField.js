import React, { useState, useEffect } from 'react'
import Sticker from './Sticker'
import './StickersField.css'
import api from '../api';

function StickersField() {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    api.get('').then(({data}) => setStickers(data));
  }, [])

  function addSticker() {
    api.post('', {
      xValue: 10,
      yValue: 10,
      content: ''
    }).then(({data}) => setStickers([...stickers, data]));
  }

  function updateSticker(sticker, stickerContent, stickerPosition) {
    api.put(sticker.id, {
      xValue: stickerPosition.x,
      yValue: stickerPosition.y,
      content: stickerContent
    })
    .then(({data}) => setStickers(stickers.map(item => item.id === data.id ? data : item)));
  }

  function deleteSticker(id) {
    api.delete(id).then(({data}) => setStickers(stickers.filter(item => item.id !== data.id)));
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <header className="col app-header">Stickers App</header>
          <button className="col-xs btn btn-sm btn-primary float-right" onClick={addSticker}>Add sticker</button>
        </div>       
      </div>
      <div>
        {stickers.map(sticker => (
          <Sticker key={sticker.id} sticker={sticker} onStickerDelete={deleteSticker} onStickerUpdate={updateSticker}/>
        ))}
      </div>
    </>
  )
}

export default StickersField
