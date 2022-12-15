import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "../css/navbar.css";

export default function NavbarView() {
    const [signed, setSigned] = React.useState(false);
    function userLogin() {
        setSigned(true);
    }
    return <nav className="navbar">
        <Link to="" className="nav-title nav-home"><img src="CG-withoutbg.png"></img></Link>
        <a href="" className="nav-toggle">
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
        </a>
        <ul>
            <CustomLink href="/profile" className="btn-links nav-goals">Profile</CustomLink>
            <CustomLink href="/goals" className="btn-links nav-goals">Goals</CustomLink>
            <CustomLink href="/bmi" className="btn-links nav-bmi">Bmi</CustomLink>
            <CustomLink href="/diet" className="btn-links nav-diet">Diet</CustomLink>
        </ul>
        <div>
            <a href="/login" className={signed ? "login-btn" : "hidden"}>Login</a>
            <a href="/signup" className={signed ? "btn" : "hidden"}>Sign up</a>
            <a href="/logout" className={!signed ? "btn" : "hidden"}>Log out</a>
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