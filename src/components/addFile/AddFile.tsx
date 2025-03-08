import * as React from "react";
import UserInfo from "@/components/addFile/UserInfo.tsx";
import AddFileHeader from "@/components/addFile/AddFileHeader.tsx";

const AddFile = () => {
    return (
        <>
            <div className="w-auto h-auto rounded-[100px] py-2 px-3 bg-[#242424] flex justify-between items-center gap-3">
                <UserInfo/>
            </div>
            <div><AddFileHeader/></div>
        </>
    );
};

export default React.memo(AddFile)
