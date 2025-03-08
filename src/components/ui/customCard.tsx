import * as React from "react"
import { FC, SVGProps } from "react"


interface GenericCardProps {
    Icon: FC<SVGProps<SVGSVGElement>>
    text: React.ReactNode
}

const CustomCard = ({ Icon, text }: GenericCardProps) => {
    return (
        <div className="w-full h-full bg-[#242424] p-6 rounded-[20px] flex items-center gap-1.5">
                {<Icon/>}
                {text}
        </div>
    )
}

export default React.memo(CustomCard)
