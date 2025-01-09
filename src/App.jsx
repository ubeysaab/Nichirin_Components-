import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Toggle from './components/Headless/Toggle/index'

// Components 

import Button from './components/Button/Button'
import Menu from './components/DropDownMenu/Menu/Menu'
import MenuDropDown from './components/DropDownMenu/DropDown/MenuDropDown'
import MenuItems from './components/DropDownMenu/MenuItem/MenuItems'
import IconToggle from './components/IconToggle/IconToggle'


import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { AiTwotoneCreditCard } from 'react-icons/ai'
import Avatar from './components/Avatar/Avatar'
import Badge from './components/DropDownMenu/Badge/Badge'
import { FaCreditCard } from 'react-icons/fa'





export function FollowMouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        backgroundColor: "#fe3",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
}



function App() {
  const movieCategories = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];
  return (
    <>
      <Button size='lg' variation={'warning'}  onClick={() => console.log("how are you")} onMouseEnter={() => console.log("fuck")}>
        click
      </Button>
      <Button variation={"success"} >
        click
      </Button>
      <Button variation={"danger"} >
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

        <Menu>
          <Toggle.Button variation='warning'>
            movies
          </Toggle.Button>
          <Toggle.On>
            <MenuDropDown>
              {movieCategories.map(item => <MenuItems>{item}</MenuItems>)}
            </MenuDropDown>
          </Toggle.On>
        </Menu>

      </Toggle>

      <IconToggle on={<AiFillLike />} off={<AiOutlineLike />} />

      {/* <Avatar/>
      <Avatar>
        Ubey Saab
      </Avatar>

      <Avatar src={"https://images.pexels.com/photos/19727180/pexels-photo-19727180/free-photo-of-a-house-in-the-snow-with-trees-and-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} /> */}

      <Badge colorProp={'red'}  pillProp/>
      <Badge colorProp={'red'}  pillProp>
        <FaCreditCard style={{marginRight:"5px"}}/>
        Entegration
      </Badge >
    </>

  )

}

export default App
