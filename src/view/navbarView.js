import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "../css/navbar.css";

export default function NavbarView() {
    return <nav className="navbar">
        <Link to="/home" className="nav-title nav-home"><img src="logo.png"></img></Link>
        <a href="/home" className="nav-toggle">
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
        </a>
        <ul>
            <CustomLink href="/" className="btn-links nav-diet">Diet</CustomLink>
            <CustomLink href="/bmi" className="btn-links nav-bmi">Bmi</CustomLink>
            <CustomLink href="/goals" className="btn-links nav-goals">Goals</CustomLink>
        </ul>
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