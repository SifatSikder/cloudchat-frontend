import * as React from "react";
import {ReactComponent as CloudChatIcon} from "@/assets/icons/appIcon.svg"

const AddFileHeader = ()=>{
    return (
        <>
            <div className="gap-0.5 flex items-center justify-center text-white font-normal text-[54px] leading-[100%] tracking-[-3%] text-center align-middle">
                <span>Add Files to</span>
                <span><CloudChatIcon/>
                </span> Cloud Chat <span/>
            </div>
            <div className="flex flex-col items-center justify-between">
                <span className="font-normal text-[14px] leading-[130%] tracking-[1%] text-center align-middle text-[#B7B7B7]">Your files will not be stored on our servers and no AI models will be trained.</span>
                <span className="font-semibold text-[14px] leading-[130%] tracking-[1%] text-center align-middle text-[#F37F0C]">Supported File Types: .docx, .pdf, .epub, and many text filetypes</span>
            </div>


        </>

    )
}

export default React.memo(AddFileHeader)
