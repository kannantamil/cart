import React from 'react';
import Loop from './loop';

export default function Cart ({cartid,remove}){
console.log(cartid)
    return(

        <div className='mobile:grid mobile:grid-cols-4 flex flex-col p-[10px] gap-4 justify-center items-center w-full'>
            {cartid&&cartid.map((val,index)=>
            {
                return( 
                   <Loop cartid={cartid} remove={remove} val={val} index={index} />
                 );
            })}
        </div>

    )

}