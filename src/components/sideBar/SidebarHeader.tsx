import * as React from "react";
import {ReactComponent as Logo} from "@/assets/icons/logo.svg"
import {ReactComponent as LogoLabel} from "@/assets/icons/logoLabel.svg"
import {ReactComponent as SearchIcon} from "@/assets/icons/searchIcon.svg"
import {ReactComponent as SidebarLeft} from "@/assets/icons/sidebarLeft.svg"
import {Button} from "@/components/ui/button.tsx";

const SidebarHeader = ()=>{
    return (
        <>
            <div id="topnavBar" className="flex justify-between">
                <div id="logo-label" className="w-3/5 flex items-center gap-3 ">
                    <Logo/>
                    <LogoLabel/>
                </div>
                <div id="icons" className="flex items-center gap-3">
                    <SearchIcon/>
                    <SidebarLeft/>
                </div>
            </div>
            <div id="actionButtons" className="flex flex-col w-full h-auto gap-y-3">
                <div id="addFolder">
                    <Button className="border border-[#FFFFFF26]">+ Add folder</Button>
                </div>
                <div id="createChat">
                    <Button className="bg-[#FFFFFF26] border border-none">+ Create Chat</Button>
                </div>
            </div>
        </>
    )
}

export default React.memo(SidebarHeader)
