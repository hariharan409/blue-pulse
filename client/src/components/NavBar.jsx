import { opscareLogo } from "../assets";


const NavBar = () => {

    return(
        <nav style={{width: "100%",height: "60px",backgroundColor: "#050816",display: "flex",alignItems: "center",paddingInline: "10px"}}>
            <img src={opscareLogo} style={{height: "50px"}} />
        </nav>
    )
}

export default NavBar;