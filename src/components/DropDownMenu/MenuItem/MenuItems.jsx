import React from 'react'
import "./MenuItem.scss"
function MenuItems({children,...rest}) {
  return (
    <div className='menu-item' {...rest}>{children}</div>
  )
}

export default MenuItems