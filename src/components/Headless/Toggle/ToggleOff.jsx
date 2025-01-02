import React, { useContext } from 'react'
import { ToggleContext } from './Toggle'
function ToggleOff({children}) {
  let {on} = useContext(ToggleContext)
  return (
    <div>
    {!on?children:null}
  </div>
  )
}

export default ToggleOff