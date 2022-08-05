import React from 'react'
import useGlobalContext from '../context'
import sublinks from "../data/data"

function Navbar() {

  const {openSideBar ,openSubmenu, closeSubmenu} = useGlobalContext()

  const handleSubmenu = (e) =>{
    const selectedPage = e.target.textContent
    const pageCoordinates = e.target.getBoundingClientRect()

    const center = (pageCoordinates.left + pageCoordinates.right)/2 //compute the center of the selected ankor tag
    const bottom = pageCoordinates.bottom + 8

    openSubmenu(selectedPage, {center, bottom})
  }

  const handleClosingSubmenu = (e) =>{
    if( !e.target.classList.contains('link-btn')){
      closeSubmenu()
    }
  }


  return (
    <nav className='nav-bar' onMouseOver={handleClosingSubmenu}>
      <div className="logo">
      </div>
      <ul>
        {sublinks.map( sublink=>{
          return (
            <li>
              <a href="#" className="link-btn" onMouseOver={handleSubmenu}>{sublink.page}</a>
            </li>
          )
        })}
      </ul>
      <button className='hero-btn'>Sign in</button>
      <div className="hamburger" onClick={openSideBar}>
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Navbar