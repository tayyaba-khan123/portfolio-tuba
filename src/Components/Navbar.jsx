import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = (e) => {
        e.preventDefault()
        setShowMenu(!showMenu);
    };

    return (
        <header className="nav-bar">
            <div className="logo">
                <img src="/vite.svg" alt="vite logo" />
            </div>
            <nav className={showMenu ? "mobile-menu" : "web-menu" }>
                <ul className="nav-ul">
                    <li>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                      <li>
                        <Link className="nav-link" to="/Blogs">
                            Blogs
                        </Link>
                    </li>
               
                    <li>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    
                </ul>
            </nav>
            <div className="ham-menu">
                <span onClick={handleMenu}>=</span>
            </div>
        </header>
    );
}
