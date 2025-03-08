import * as React from "react";
import UserInfo from "@/components/addFile/UserInfo.tsx";
import AddFileHeader from "@/components/addFile/AddFileHeader.tsx";
import CustomCard from "@/components/ui/customCard.tsx";
import {ReactComponent as DragDrop} from "@/assets/icons/dragDrop.svg"
import {ReactComponent as URL} from "@/assets/icons/url.svg"
import {ReactComponent as Dropbox} from "@/assets/icons/dropbox.svg"
import {ReactComponent as Gdrive} from "@/assets/icons/gdrive.svg"
import {Button} from "@/components/ui/button.tsx";

const AddFile = () => {
    return (
        <>
            <div
                className="w-auto h-auto rounded-[100px] py-2 px-3 bg-[#242424] flex justify-between items-center gap-3">
                <UserInfo/>
            </div>
            <div><AddFileHeader/></div>
            <div className="border border-red-800 grid grid-cols-2 w-3/4 h-auto gap-2">
                <CustomCard
                    Icon={DragDrop}
                    text = {
                        <div className="flex flex-col justify-between items-start">
                            <span className="text-white font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle">Drag & drop local files here,</span>
                            <span className="text-white font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle">or click to select</span>
                        </div>
                    }
                />
                <CustomCard
                    Icon={URL}
                    text = {
                        <div className="flex flex-col justify-between items-start w-full gap-y-2">
                            <span className="text-white font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle">Enter in a public URL:</span>
                            <div className="w-full h-full flex justify-between items-center py-1 pr-0.5 pl-5 rounded-[100px] bg-[#353535]">
                                <span className="font-normal text-[14px] leading-[130%] tracking-normal align-middle text-[#7E7C78]">https://example.com/file.pdf</span>
                                <span ><Button className="bg-[#FFFFFF26] border-none rounded-[16px] h-[36px] w-auto px-[16px]">Add</Button></span>
                            </div>
                        </div>
                    }
                />
                <CustomCard
                    Icon={Dropbox}
                    text = {
                    <span className="text-white font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle">Add files from Dropbox</span>
                    }
                />
                <CustomCard
                    Icon={Gdrive}
                    text = {
                    <span className="text-white font-semibold text-[18px] leading-[130%] tracking-[-1%] align-middle">Add files from  Google Drive</span>
                    }
                />
            </div>

        </>
    );
};

export default React.memo(AddFile)
