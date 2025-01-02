import React from 'react'
import classNames from 'classnames'
// import './Button.scss'
function Button({children="button",size,variation,...rest}) {

  let sizeClass = size&&`button--${size}`
  let variationClass = variation&&`button--${variation}`
  let allClassesNames = classNames(sizeClass,variationClass,rest.className)
  return (
    <button {...rest} className={classNames(allClassesNames)}> {children} </button>
  )
}

export default Button