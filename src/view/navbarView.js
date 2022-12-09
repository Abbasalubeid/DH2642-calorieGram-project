import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "../css/navbar.css";

export default function NavbarView() {
    return <nav className="navbar">
        <div className="nav-title">
            <Link to="home">Calorie Gram</Link>
        </div>
        <a href="/home" className="nav-toggle">
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
            <span className="nav-bar"></span>
        </a>
        <div>
            <ul>
                <CustomLink to="/bmi" className="nav-bmi">BMI</CustomLink>
                <CustomLink to="/goals" className="nav-goals">Goals</CustomLink>
            </ul>
        </div>
    </nav>
}

/* custom component */
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li >
    )
}