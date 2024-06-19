import React, { useState } from 'react'

function FeedbackItem({item}) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is feedback item.");
  return (
    <div className='card'>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">
        {item.text}
      </div>
    </div>
  )
}

export default FeedbackItem;
