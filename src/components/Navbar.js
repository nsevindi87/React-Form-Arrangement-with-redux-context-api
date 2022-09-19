import React from 'react'
import PropTypes from "prop-types"

const Navbar = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}
Navbar.prototypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default"
}

export default Navbar
