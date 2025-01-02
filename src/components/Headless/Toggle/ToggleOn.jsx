import React, { Children, useContext } from 'react'
import {ToggleContext} from './Toggle'
function ToggleOn({children}) {
  let {on} = useContext(ToggleContext)
  return (
    <div>
      {on?children:null}
    </div>
  )
}

export default ToggleOn