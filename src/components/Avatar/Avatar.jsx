import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import "./Avatar.scss"
function Avatar({ children, src }) {




  let [backgroundColor, setBackGroundColor] = useState(createRandomColor())


  function createRandomColor() {


    let color = `#${Math.floor(Math.random() * 1677215).toString(16).padStart(6, '0')}`
    console.log(color)
    return color
  }


  return (
    <>
      {
        src ? (<div className='avatar' ><img src={src} alt="" /></div>) : children ? <div className='avatar' style={{ backgroundColor: backgroundColor }}>{`${children.split(" ")[0][0]}${children.split(" ")[1][0]}`}</div> : <div className='avatar' style={{ backgroundColor: backgroundColor }}> <FaRegUser /></div>
      }

    </>
  )


}

export default Avatar