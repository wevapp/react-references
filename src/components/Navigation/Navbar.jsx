import { Link } from 'react-router-dom'
import { useRef } from 'react'
// import module css
import NavStyle from './Navbar.module.css'

const Navbar = () => {
  const navListRef = useRef() // reference for list under ul
  const menuBtnRef = useRef() // reference for menu button when mobile screen
  const closeBtnRef = useRef() // reference for close button when mobile screen

  // when click menu btn display menu list
  const handleMenu = () => {
    navListRef.current.style.display = 'grid'
    navListRef.current.style.position = 'absolute'

    closeBtnRef.current.style.display = 'block'
    menuBtnRef.current.style.display = 'none'
  }
  // when click, close the menu list
  const handleClose = () => {
    navListRef.current.style.display = 'none'
    menuBtnRef.current.style.display = 'block'
  }

  return (
    // NavStyle Element is use for module css
    <div className={NavStyle['main-container']}>

            <div className="css-logo">
                <a href="#"><p className='text-5xl ml-6'>Logo</p></a>
            </div>

            <div className={`${NavStyle['css-nav']} flex items-center`}> 
                <i ref={menuBtnRef} className={`${NavStyle.menu} fa-duotone fa-bars fa-2xl -scroll-mr-40`} onClick={handleMenu}></i>
                <ul ref={navListRef} className='flex text-center'>
                    <li>
                        <i ref={closeBtnRef} style={{display: 'none'}} className="fa-duotone fa-rectangle-xmark fa-2xl" onClick={handleClose}></i>
                    </li>
                    <li className='mx-4 flex items-center'><i className="mr-4 fa-duotone fa-house"></i>Home</li>
                    <li className='mx-4 flex items-center'><i className="mr-4 fa-duotone fa-boxes-stacked fa-beat"></i>Products</li>
                    <li className='mx-4 flex items-center'><i className="mr-4 fa-duotone fa-address-card"></i>About</li>
                    <li className='mx-4 flex items-center'><i className="mr-4 fa-duotone fa-address-book"></i>Contact</li>
                </ul>
            </div>
        </div>
  )
}

export default Navbar