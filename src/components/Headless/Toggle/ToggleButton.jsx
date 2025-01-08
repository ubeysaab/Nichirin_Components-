import React, { useContext } from 'react'
import { ToggleContext } from './Toggle'
import Button from '../../Button/Button'
function ToggleButton({children}) {
  let {handleToggle} = useContext(ToggleContext)
  return (
   <Button onClick={handleToggle}>
    {children}
   </Button>
  )
}

export default ToggleButton