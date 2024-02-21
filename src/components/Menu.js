import React from 'react'
import { GiLoveSong } from "react-icons/gi";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

import { BiSolidPlaylist } from "react-icons/bi";
const Menu = ({isSong,setIsSong,isUpload,isSetUpload}) => {
    return (
        <section>
            <div className='flex justify-around py-5 text-purple-900'>
                <div className={`${isSong?"bg-purple-900 text-white":"bg-white text-purple-900"} rounded-2xl cursor-pointer`} onClick={()=>{setIsSong(true);isSetUpload(false)}}>
                    <div className='flex px-4 py-2'>
                        <span className='mr-1 text-2xl'><GiLoveSong /></span><span className='font-semibold'>Songs</span>
                    </div>
                </div>
                
                <div  className={`${!isSong&&!isUpload?"bg-purple-900 text-white":"bg-white text-purple-900"} rounded-2xl cursor-pointer`} onClick={()=>{setIsSong(false);isSetUpload(false)}}>
                    <div className='flex px-4 py-2'>
                    <span className='mr-1 text-2xl'><BiSolidPlaylist /></span><span className='font-semibold'>Playlist</span>
                    </div>
                </div>
                <div className={`${isUpload&&!isSong?"bg-purple-900 text-white":"bg-white text-purple-900"} rounded-2xl cursor-pointer`} onClick={()=>{setIsSong(false);isSetUpload(true)}}>
                    <div className='flex px-4 py-2'>
                        <span className='mr-1 text-2xl'><MdOutlineDriveFolderUpload /></span><span className='font-semibold'>Upload</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu