import * as React from "react";
import SidebarHeader from "@/components/sideBar/SidebarHeader.tsx";
import SidebarFooter from "@/components/sideBar/sidebarFooter.tsx";

const Sidebar = () => {
    return (
        <>
                <div id="sidebarHeader" className="w-full h-auto gap-8 flex flex-col justify-between">
                    <SidebarHeader/>
                </div>
                <div id="sidebarFooter" className="w-full h-auto gap-3">
                    <SidebarFooter/>
                </div>
        </>
    );
};

export default React.memo(Sidebar)
