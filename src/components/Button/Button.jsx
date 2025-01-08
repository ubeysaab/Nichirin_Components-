import React from 'react'
import classNames from 'classnames'
// import './Button.scss'
function Button({children="button",size,variation,className="button",...rest}) {

  let sizeClass = size&&`button--${size}`
  let variationClass = variation&&`button--${variation}`
  let allClassesNames = classNames(sizeClass,variationClass,className)
  return (
    <button {...rest} className={allClassesNames}> {children} </button>
  )
}

export default Button