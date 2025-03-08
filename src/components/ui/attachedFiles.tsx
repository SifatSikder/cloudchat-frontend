import React, { FC, SVGProps } from "react";
import {Checkbox as Check} from "@/components/ui/checkbox.tsx";

import {ReactComponent as Info} from "@/assets/icons/info.svg"
import {ReactComponent as Cross} from "@/assets/icons/cross.svg"

interface AttachedFileProps {
    fileIcon: FC<SVGProps<SVGSVGElement>>;
    name: string;
}

const AttachedFile: FC<AttachedFileProps> = ({ fileIcon: FileIcon, name }) => {
    return (
       <div className="w-auto h-[30px] rounded-[20px] py-[7px] pr-[7px] pl-3 gap-[14px] flex justify-between items-center">
           <div id="fileInfo" className="flex justify-between items-center gap-2">
               <FileIcon />
               <span className="font-normal text-[14px] leading-[100%] tracking-normal align-middle text-white">{name}</span>
           </div>
           <div id="ocrInfo" className="flex justify-between items-center gap-1.5">
               <div className="flex items-center justify-between gap-1.5">
                   <Check id="chekOCR" className = "w-5 h-5 rounded-[6px] border-[1.5px] border-[#7C7C7C]"/>
                   <label htmlFor="chekOCR" className="font-normal text-[14px] leading-[100%] tracking-normal align-middle text-[#B7B7B7]">Free OCR </label>
               </div>
               <span><Info/></span>
           </div>
           <div><Cross/></div>
       </div>
    );
};

export default React.memo(AttachedFile);
