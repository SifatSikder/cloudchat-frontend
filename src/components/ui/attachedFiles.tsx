import React, { FC, SVGProps } from "react";

interface AttachedFileProps {
    fileIcon: FC<SVGProps<SVGSVGElement>>;
    name: string;
}

const AttachedFile: FC<AttachedFileProps> = ({ fileIcon: FileIcon, name }) => {
    return (
        <div className="flex items-center bg-gray-800 text-gray-400 rounded-full px-4 py-2 w-fit">
            <FileIcon className="h-5 w-5 text-gray-400" />
            <span className="text-sm opacity-60 ml-2">{name}</span>
        </div>
    );
};

export default React.memo(AttachedFile);
