import React, { useState } from 'react'
import "./Badge.scss"
import classNames from 'classnames';

function Badge({children="badge",pillProp,colorProp,className="badge",...rest}) {

  let selctedColor = colorProp?`badge--${colorProp}`:"";
  let pill = pillProp?`badge--pill`:""

  let allClassNames=classNames(selctedColor,pill,className)
  
  return (
    <div 
      {...rest} 
      className={allClassNames}
      >
        
        {children}
      
    </div>
  )
}

export default Badge