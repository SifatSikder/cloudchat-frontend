import * as React from "react";
import {ReactComponent as InfoCircle} from "@/assets/icons/infoCircle.svg";

const UserInfo = ()=>{
    return (
        <>
            <InfoCircle/>
            <div >
                <span className="font-normal text-[14px] leading-[135%] tracking-[1%] text-center align-middle">The web version does not display local chats. To access all features, please </span>
                <span className="font-semibold text-[14px] leading-[110%] tracking-[-2%] text-center align-middle text-[#FB9937]">install the app.</span>
            </div>
        </>
    )
}

export default React.memo(UserInfo)
