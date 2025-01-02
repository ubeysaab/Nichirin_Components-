import React, { useContext } from 'react'
import { ToggleContext } from './Toggle'

function ToggleButton({children}) {
  let {handleToggle} = useContext(ToggleContext)
  return (
   <div onClick={handleToggle}>
    {children}
   </div>
  )
}

export default ToggleButton