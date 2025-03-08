import React, { FC, SVGProps } from "react";
import {Checkbox as Check} from "@/components/ui/checkbox.tsx";

import {ReactComponent as Info} from "@/assets/icons/info.svg"

interface AttachedFileProps {
    fileIcon: FC<SVGProps<SVGSVGElement>>;
    name: string;
}

const AttachedFile: FC<AttachedFileProps> = ({ fileIcon: FileIcon, name }) => {
    return (
       <div className="w-auto h-[30px] rounded-[20px] py-[7px] pr-[7px] pl-3 gap-[14px]">
           <div id="fileInfo" className="flex justify-between items-center gap-2">
               <FileIcon />
               <span className="font-normal text-[14px] leading-[100%] tracking-normal align-middle text-white">{name}</span>
           </div>
           <div id="ocrInfo" className="flex justify-between items-center gap-1.5">
               <div>
                   <Check id="chekOCR" />
                   <label htmlFor="chekOCR" className="font-normal text-[14px] leading-[100%] tracking-normal align-middle text-[#B7B7B7]">Free OCR </label>
               </div>
               <span><Info/></span>
               <span>x</span>
           </div>

       </div>
    );
};

export default React.memo(AttachedFile);
