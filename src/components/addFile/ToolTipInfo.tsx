import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {ReactComponent as ToolTipIcon} from "@/assets/icons/tooltipInfo.svg"

export default function ToolTipInfo() {
    return (
        <TooltipProvider>
            <Tooltip className="">
                <TooltipTrigger asChild>
                    <ToolTipIcon/>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="p-0 rounded-[20px]">
                    <div className="w-[226px] h-auto  p-3 rounded-[20px] bg-[#1E1E1E]">
                        Deep Dive processes documents section by section for "unlimited" context, enabling complete answers. Run once per chat to unlock Table AI and Prompt Loops
                    </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
