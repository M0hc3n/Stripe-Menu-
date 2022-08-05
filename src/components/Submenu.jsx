import React from 'react'
import useGlobalContext from '../context'

function Submenu() {
    const {isSubmenuOpen, closeSubmenu, location, toBeDisplayed} = useGlobalContext()

    const container = React.useRef(null)

    React.useEffect(()=>{
        const {center , bottom} = location
        container.current.style.left = `${center}px`
        container.current.style.top = `${bottom}px`
    }, [location])

  return (
    <aside className={`${isSubmenuOpen ? "submenu show": "submenu"}`} ref={container} onMouseLeave={closeSubmenu}>
        <h4 className='sublink-title'>{toBeDisplayed.page}</h4>
        <ul className="inner-ul">
                    {
                      toBeDisplayed.links.map( link =>{
                        return (
                          <li>
                            {link.icon}
                            <a href={link.url}>{link.label}</a>
                          </li>
                        )
                      })
                    }    
        </ul>
    </aside>
  )
}

export default Submenu