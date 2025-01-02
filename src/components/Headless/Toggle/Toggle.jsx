import React, { Children, useState } from 'react'
import { createContext } from 'react'


export let ToggleContext = createContext()
function Toggle({children}) {

  let [on,setOn] = useState(false)
  function handleToggle(){
    setOn(prevOn => !prevOn)
  }
  return (
    <ToggleContext.Provider  value={{on,handleToggle}}>{children}</ToggleContext.Provider>
  )
}

export default Toggle