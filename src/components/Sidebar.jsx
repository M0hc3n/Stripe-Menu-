import React from 'react'
import sublinks from '../data/data'
import useGlobalContext from '../context'

function Sidebar() {
  
  const { isSideBarOpen ,closeSideBar} = useGlobalContext()

  return (
    <div className={`sidebar-container ${isSideBarOpen ? "show": ""}`}>
      <div className="sidebar">
        <div className="cancel-icon" onClick={closeSideBar}>
            <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className='outer-ul'>
          {
            sublinks.map( sublink => {
              return (
                <li>
                  <h4 className='sublink-title'>{sublink.page}</h4>
                  <ul className="inner-ul">
                    {
                      sublink.links.map( link =>{
                        return (
                          <li>
                            {link.icon}
                            <a href={link.url}>{link.label}</a>
                          </li>
                        )
                      })
                    }    
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar