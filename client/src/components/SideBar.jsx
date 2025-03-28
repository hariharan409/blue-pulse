import {Sidebar,Menu,SubMenu,MenuItem} from "react-pro-sidebar";

const SideBar = () => {

    return(
        <aside className="sidebar-root-container">
            <Sidebar style={{width: "100%"}}>
                <Menu style={{backgroundColor: "#100d25",color: "#FFF"}}>
                    <SubMenu label="Teams" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>National Teams</MenuItem>
                        <MenuItem>Club Teams</MenuItem>
                    </SubMenu>
                    <SubMenu label="Tournament" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>International</MenuItem>
                        <MenuItem>Domestic</MenuItem>
                    </SubMenu>
                    <SubMenu label="Tournament" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>International</MenuItem>
                        <MenuItem>Domestic</MenuItem>
                    </SubMenu>
                    <SubMenu label="Tournament" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>International</MenuItem>
                        <MenuItem>Domestic</MenuItem>
                    </SubMenu>
                    <SubMenu label="Tournament" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>International</MenuItem>
                        <MenuItem>Domestic</MenuItem>
                    </SubMenu>
                    <SubMenu label="Tournament" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>International</MenuItem>
                        <MenuItem>Domestic</MenuItem>
                    </SubMenu>
                    <SubMenu label="Tournament" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>International</MenuItem>
                        <MenuItem>Domestic</MenuItem>
                    </SubMenu>
                    <SubMenu label="Tournament" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>International</MenuItem>
                        <MenuItem>Domestic</MenuItem>
                    </SubMenu>
                    <SubMenu label="Tournament" style={{borderBottom: "5px solid #050816"}}>
                        <MenuItem>International</MenuItem>
                        <MenuItem>Domestic</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </aside>
    )
}

export default SideBar;