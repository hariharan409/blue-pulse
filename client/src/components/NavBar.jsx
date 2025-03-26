import { opscareLogo } from "@/assets";


const NavBar = () => {

    return(
        <nav className="nav-bar-root-container">
            <img src={opscareLogo} style={{height: "50px"}} />
        </nav>
    )
}

export default NavBar;