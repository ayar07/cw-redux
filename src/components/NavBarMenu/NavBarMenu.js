import { Link } from "react-router-dom"

const routes = [
    {
        path: "/",
        label: "HereIsLogo",
        id: "1"
    },
    {
        path: "/home",
        label: "Home",
        id: "2"
    },
    {
        path: "/about",
        label: "AboutUs",
        id: "3"
    },
    {
        path: "/contact",
        label: "Contact",
        id: "4"
    },
    {
        path: "/news",
        label: "News",
        id: "5"
    },
    {
        path: "/services",
        label: "Services",
        id: "6"
    },
]

const NavBarMenu = () => {
    return (
        <div>
            {routes.map((el) => ( 
                <Link style={{marginRight: "30px", }} to={el.path} key={`${el.id}-${el.label}`} >{el.label}</Link>
            ))}
        </div>
    )
}

export default NavBarMenu