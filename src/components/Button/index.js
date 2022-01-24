import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

function Button({children, onClick, width}) {
  return(
    <button className="btn" onClick={onClick} style={{width}}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func.isRequired,
  with: PropTypes.number.isRequired
}

export default Button