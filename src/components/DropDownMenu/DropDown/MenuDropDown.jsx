import React, { Children } from 'react'
import "./MenuDropDown.scss"
function MenuDropDown({children,...rest}) {
  return (
    <div className='menu-dropdown' {...rest}>

      {children}
    </div>
  )
}

export default MenuDropDown