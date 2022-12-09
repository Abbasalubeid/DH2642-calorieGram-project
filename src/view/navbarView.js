import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "../css/navbar.css";

export default function NavbarView() {
    return <nav className="navbar">
        <Link to="home" className="nav-title">Calorie Gram</Link>
        <ul>
            <CustomLink to="/home" className="nav-home">Home</CustomLink>
            <CustomLink to="/bmi" className="nav-bmi">BMI</CustomLink>
            <CustomLink to="/goals" className="nav-goals">Goals</CustomLink>
        </ul>
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