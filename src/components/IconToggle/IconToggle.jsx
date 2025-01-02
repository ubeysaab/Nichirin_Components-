import React from 'react'
import Toggle from '../Headless/Toggle/index'

function IconToggle({on,off}){
  console.log(on)
  return (
    <Toggle>
      <Toggle.Button>
         <Toggle.Off>
          {off}
         </Toggle.Off>
         <Toggle.On>
          {on}
         </Toggle.On>
      </Toggle.Button>
    </Toggle>
  )
}

export default IconToggle