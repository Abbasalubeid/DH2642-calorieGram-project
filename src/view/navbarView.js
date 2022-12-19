import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "../css/navbar.css";

export default function NavbarView() {
    const [signed, setSigned] = React.useState(false);
    function userLogin() {
        setSigned(true);
    }

    // const toggleButton = document.getElementsByClassName('nav-toggle')[0];
    // const navbarlinks = document.getElementsByClassName('nav-links')[0];
    // toggleButton.addEventListener('click', () => {
    //     navbarlinks.classList.toggle('active')
    //     console.log(navbarlinks);
    // })
    

    // function toggleButtonClickACB(){
    //     navbarlinks.classList.toggle('active');
    // }

    return <nav className="navbar">
        <Link to="/home" className="nav-title nav-home"><img src="CG-withoutbg.png"></img></Link>
        <a className="nav-toggle">
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
        </a>
        <div className="nav-links">
        <ul>
            <CustomLink href="/profile" className="btn-links nav-profile">Profile</CustomLink>
            <CustomLink href="/bmi" className="btn-links nav-bmi">Bmi</CustomLink>
            <CustomLink href="/goals" className="btn-links nav-goals">Goals</CustomLink>
            <CustomLink href="/diet" className="btn-links nav-diet">Diet</CustomLink>
            <CustomLink href="/summary" className="btn-links nav-summary">Summary</CustomLink>

        </ul>
        </div>
        <div>
            <a href="/" className={!signed ? "login-btn" : "hidden"}>Login</a>
            <a href="/signup" className={!signed ? "btn signbtn" : "hidden"}>Sign up</a>
            <a href="/login" className={signed ? "btn signbtn" : "hidden"}>Log out</a>
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