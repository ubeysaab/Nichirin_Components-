import React, { Children } from 'react'
import "./Menu.scss"
function Menu({children,...rest}) {
  return (
    <div  className='menu' {...rest}>{children}</div>
  )
}

export default Menu