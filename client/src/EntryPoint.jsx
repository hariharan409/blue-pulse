import { NavBar,SideBar } from "@/components";

export const EntryPoint = () => {
    
    return(
        <div className="root-container" style={{width: "100%",height: "100vh",display: "flex",flexDirection: "row",overflow: "hidden"}}>
            {/* sidebar */}
            <SideBar />
            {/* main content */}
            <div style={{width: "100%",height: "100%",backgroundImage: "url(/src/assets/herobg.png)",backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat"}}>
                {/* navbar */}
                <NavBar />
                {/* pages */}
                <div style={{width: "100%",height: "100%",overflowY: "auto"}}>
                    
                </div>
            </div>
        </div>
    )
}