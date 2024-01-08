import React from 'react';
import { FcLike } from "react-icons/fc";
export default function Likes ({like,remove}){
    console.log(like)

    return(

        <div className='mobile:grid grid-cols-2 flex flex-col tablet:grid-cols-4   gap-4 p-[20px] w-[full] '>
            {like ?
                like.map((val,index)=>
                {
                    return(
                    <div>
                        <div key={index} className='border-[black] border-[2px] flex flex-wrap justify-between items-center flex-col gap-[10px] p-[20px] relative ' >
                    <p className='font-semibold'>{val.title}</p>
                    <img src={val.images[0]} className='h-[100px] w-[100px]' />
                    <p className='font-semibold'>{val.brand}</p>
                    <p>{val.description}</p>
                    <button onClick={()=>remove(index)}><FcLike className='absolute  rounded-[50%] top-[1vh] right-[3%] bg-[white] p-[5px] text-[30px] z-50'/></button>
                </div>
                
                    </div>
                    );
                }):"loading..."
            } 
            
        </div>

    );

}