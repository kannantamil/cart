import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){

    return(
        <div className='flex justify-between bg-[#85e67c] p-[10px] w-[100%] sticky z-50 top-0' >
            <div>
                <Link to={''} >Logo</Link>
            </div>
            <div className='flex gap-[20px]'>
                <Link to={''}>Home</Link>
                <Link to={'/likes'}>Likes</Link>
                <Link to={'/cart'}>Cart</Link>
            </div>
        </div>

    )

}