import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "../css/navbar.css";

export default function NavbarView() {
    const [signed, setSigned] = React.useState(false);
    function userLogin() {
        setSigned(true);
    }

    const toggleButton = document.getElementsByClassName('nav-toggle')
    const navbarlinks = document.getElementsByClassName('nav-links')
    // toggleButton.addEventListener('click', () => {
    //     navbarlinks.classList.toggle('active')
    // })

    function toggleButtonClickACB(){
        navbarlinks.classList.toggle('active');
    }

    return <nav className="navbar">
        <Link to="/home" className="nav-title nav-home"><img src="CG-withoutbg.png"></img></Link>
        <button className="nav-toggle" onClick={toggleButtonClickACB}>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
        </button>
        <div className="nav-links">
            <ul>
                <CustomLink href="/profile" className="btn-links nav-goals">Profile</CustomLink>
                <CustomLink href="/goals" className="btn-links nav-goals">Goals</CustomLink>
                <CustomLink href="/bmi" className="btn-links nav-bmi">Bmi</CustomLink>
                <CustomLink href="/diet" className="btn-links nav-diet">Diet</CustomLink>
                <CustomLink href="/summary" className="btn-links nav-summary">Summary</CustomLink>

            </ul>
        </div>
            <div>
                <a href="/" className={!signed ? "login-btn btn-primary" : "hidden"}>Login</a>
                <a href="/signup" className={!signed ? "btn btn-primary" : "hidden"}>Sign up</a>
                <a href="/login" className={signed ? "btn" : "hidden"}>Log out</a>
        </div>
    </nav>
}

/* custom component */
function CustomLink({ href, children, ...props }) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li >
    )
}