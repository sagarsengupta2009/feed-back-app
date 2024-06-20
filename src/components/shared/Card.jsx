import React, { Children } from 'react'
import PropTypes from 'prop-types';

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && "reverse"}`}>
      {children}
    </div>

    // above n below code block both output same. Diff is above has been written using conditional class n below using conditional inline styling
    
    // <div className='card'  
    //     style={{backgroundColor: reverse ? 'rgb(0, 0, 0, 0.4)' : '#fff',
    //     color: reverse ? '#fff' : '#000'
    // }}>
    //   {children}
    // </div>
  )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
