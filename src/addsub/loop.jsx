import React from 'react';

export default function Loop ({remove,index,val}){

    return(

        <div key={index} className='flex flex-col border-[black] border-[2px]  justify-between items-center p-[20px] gap-[10px]'>
                        
        <p className='font-semibold'>{val.title}</p>
        <img src={val.images[0]} className='h-[100px] w-[100px]' />
        <p className='font-semibold'>{val.brand}</p>
        <p>{val.description}</p>
        <button onClick={()=>remove(index)} className='bg-[red] font-extrabold p-[5px] w-full'>Delete</button>

</div>

    )

}