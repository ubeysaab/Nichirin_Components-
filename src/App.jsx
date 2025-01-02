import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Toggle from './components/Headless/Toggle/index'

// Components 

import Button from './Components/Button/Button'
import Menu from './components/DropDownMenu/Menu/Menu'
import MenuDropDown from './components/DropDownMenu/DropDown/MenuDropDown'
import MenuItems from './components/DropDownMenu/MenuItem/MenuItems'
import IconToggle from './components/IconToggle/IconToggle'


import { AiOutlineLike,AiFillLike } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0)
  const movieCategories = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

  // const [open, setOpen] = useState(false)
  // const [open2, setOpen2] = useState(false)

  function handleOpen() {
    setOpen(prev => !prev)
  }
  return (
    <>
      <Button className='m-le' variation={'warning'} style={{ padding: "8px  12px", margin: "12px" }} onClick={() => console.log("how are you")} onMouseEnter={() => console.log("fuck")}>
        click
      </Button>
      <Button variation={"success"} size={'lg'}>
        click
      </Button>

      {/* <Menu style={{ border: "1px solid black" }}>
        <Button onClick={handleOpen}>movies</Button>
        {open && <MenuDropDown>
          {movieCategories.map(item => <MenuItems>{item}</MenuItems>)}

        </MenuDropDown>}
      </Menu> */}
      {/* <Menu style={{ border: "1px solid black" }}>
        <Button onClick={handleOpen}>movies</Button>
        {open && <MenuDropDown>
          {movieCategories.map(item => <MenuItems>{item}</MenuItems>)}

        </MenuDropDown>}
      </Menu> */}


      <br />

      <p>headless</p>

      <Toggle>

      <Menu style={{ border: "1px solid black" }}>
        <Toggle.Button>
        <Button>movies</Button>
        </Toggle.Button>
        <Toggle.On>
        <MenuDropDown>
          {movieCategories.map(item => <MenuItems>{item}</MenuItems>)}

        </MenuDropDown>
        </Toggle.On>
      </Menu>

      </Toggle>
      
      <IconToggle on={<AiFillLike/>} off={<AiOutlineLike/>} />
  </>


)

}

export default App
