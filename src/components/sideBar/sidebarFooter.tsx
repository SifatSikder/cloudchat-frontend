import * as React from "react";
import {ReactComponent as UserImage} from "@/assets/icons/userAvatar.svg"
import {ReactComponent as Settings} from "@/assets/icons/settings.svg"
import {ReactComponent as Flow} from "@/assets/icons/flow.svg"
import {Button} from "@/components/ui/button.tsx";

const SidebarFooter = ()=>{
    return (
        <>
            <div id="upgrade" className="bg-[#363636] w-full h-auto rounded-2xl p-4">
                <div id="upgrade_text" className="w-auto h-auto gap-y-2 flex flex-col mb-3">
                    <span className="font-semibold text-base leading-[110%] tracking-normal align-middle">Upgrade to Premium</span>
                    <span className="font-normal text-xs leading-[120%] align-middle text-[#868686]">Make the most of all features!</span>
                </div>
                <Button>Upgrade Plan</Button>
            </div>
            <div id="flowAITemplate" className="flex items-center gap-2 py-0.5">
                <Flow className="w-9 h-9 pl-1.5 pt-1.5"/>
                <span className="font-medium text-sm text-center leading-6 tracking-tight">Flow AI Templates</span>
            </div>
            <div id="userInfo" className="flex justify-between items-center">
                <div className="flex items-center gap-2 py-0.5">
                    <span className="w-9 h-9"><UserImage/></span>
                    <span className="font-medium text-sm text-center align-middle">Jessica Mills</span>
                </div>
                <div><Settings/></div>
            </div>
        </>
    )
}

export default React.memo(SidebarFooter)
