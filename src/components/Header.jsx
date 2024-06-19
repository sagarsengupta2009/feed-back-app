import React from 'react'
import PorpTypes from 'prop-types';

function Header({text, bgColor, txtColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: txtColor
    }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback Application",
    bgColor: "rgba(0,0,0,0.4)",
    txtColor: "#ff6a95"
}

Header.propTypes = {
    text: PorpTypes.string,
    bgColor: PorpTypes.string,
    txtColor: PorpTypes.string,
}

export default Header
