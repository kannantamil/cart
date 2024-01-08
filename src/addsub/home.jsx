import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home (){
    const [con,setcon] = useState("")
    const fetcha = async()=>{
        let data=await fetch("https://dummyjson.com/products")
        let jsondata=await data.json()
        setcon(jsondata.products)
    }

    useEffect(()=>{
        fetcha()
    },[])
    return(
         
        <div className='mobile:grid grid-cols-2 flex flex-col tablet:grid-cols-4   gap-4 p-[20px] w-[full] '>
            {con ?
               con.map((val,index)=>{
                return(
                <div key={index} className='border-[black] border-[2px] flex flex-wrap justify-between items-center flex-col gap-[10px] p-[20px]' >
                    <p className='font-semibold'>{val.title}</p>
                    <img src={val.images[0]} className='h-[100px] w-[100px]' />
                    <p className='font-semibold'>{val.brand}</p>
                    <p>{val.description}</p>
                    <Link to={'/item/'+val.id} className='bg-[green] w-[100%] text-center' >View</Link>
                    
                </div>
                );
            }):"loading....!" 
            }
        </div>

    )

}