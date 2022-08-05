import React from "react";
import data from "./data/data"

const AppContext = React.createContext()

function AppProvider({children}){
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false)
    const [location , setLocation] = React.useState({})
    const [toBeDisplayed, setToBeDisplayed] = React.useState({page:'', links:[]})

    const openSideBar = ()=>{
        setIsSideBarOpen(true)
    }

    const closeSideBar = ()=>{
        setIsSideBarOpen(false)
    }

    const openSubmenu = (page , coordinates)=>{
        setLocation(coordinates)
        const toBeDisplayedTemp = data.find( link => link.page === page)
        // find the corresponding links based on the text that the used hoovered on
        setToBeDisplayed(toBeDisplayedTemp)
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false)
    }

    return(
        <AppContext.Provider 
            value={{
                isSideBarOpen, 
                openSideBar ,
                closeSideBar,
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                location,
                toBeDisplayed
            }}>
                {children}
        </AppContext.Provider>
    )
}

export default function useGlobalContext(){
    return React.useContext(AppContext)
}

export {AppContext, AppProvider}