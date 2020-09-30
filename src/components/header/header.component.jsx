import React, { useRef } from 'react'

import "./header.styles.css"

export default function Header() {
    const sidebarRef = useRef();

    const openSidebar = () => {
        sidebarRef.current.classList.add("active-sidebar")
    }

    const closeSidebar = () => {
        sidebarRef.current.classList.remove("active-sidebar")
    }

    return (
        <header className="container nav-main-container my-4">
            <div className="d-flex justify-content-between header-main-flex">
            <div onClick={openSidebar} className="side-icon mt-3">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-filter-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <nav>
                <h1 className="display-3 logo-heading">Armour<span>Line</span></h1>
            </nav>
            <div className="nav-list-container">
                <ul className="nav-list-ul d-flex justify-content-around p-0 mt-3">
                    <li className="display-4 mx-4">Home</li>
                    <li className="display-4 mx-4">About&nbsp;Us</li>
                    <li className="display-4 mx-4">Contact</li>
                </ul>
            </div>
            </div>

            <div ref={sidebarRef} className="mobile-container">
                <ul className="mobile-ul p-0">
                    <li className="telephone">
                        <a href="tel:9999999">We are here to help! <br/><span>999.999.9999</span></a>
                    <div onClick={closeSidebar} className="second-div">
                        x  
                    </div>
                    </li>
                    <a href=""><li className="link display-4">Home</li></a>
                    <a href=""><li className="link display-4">About&nbsp;Us</li></a>
                    <a href=""><li className="link display-4">Contact</li></a>
                </ul>
            </div>
        </header>
    )
}