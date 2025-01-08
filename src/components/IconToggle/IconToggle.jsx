import React from 'react'
import Toggle from '../Headless/Toggle/index'

function IconToggle({ on, off }) {
  return (
    <Toggle>
      <Toggle.Button>
        <Toggle.Display>
          {(bool) => {
            return (
              bool ? on : off
            )
          }}
        </Toggle.Display>
      </Toggle.Button>
    </Toggle>
  )
}

export default IconToggle