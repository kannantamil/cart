import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

export default function Iphone9 ({idfuntion}){
    const {id} = useParams()
    const [test,settest] = useState("")
    const pro =async()=>{
        let data = await fetch("https://dummyjson.com/products/"+id)
        let jsonsdata = await data.json()
        settest(jsonsdata)
    }
    useEffect(()=>{
        pro()
    },[])
    console.log(test)
    return(

        <div className='flex flex-col p-[30px] bg-[#e1ecf3] justify-center items-center gap-[50px] w-full'>
            <p>{test.title}</p>
            <div className='  flex justify-center items-center w-[100%] relative '>
            <div className='flex overflow-x-auto mobile:w-[30%] w-auto mobile:h-[50vh] gap-[10px]'>
            {
            test&&test.images.map((val,i)=>{return(
                
                <img src={val} alt="" key={i}   />
            );})}
            <button onClick={()=>idfuntion(test)} className=' sticky  right-0 '> <FcLike className='absolute top-1  right-3 bg-white p-[5px]  text-[30px] rounded-[50%]' /></button>
            </div>
            
            </div>
            
           
            <div className='flex flex-col justify-center '>
                <table className='flex flex-col gap-[10px] w-[100%] justify-center  pl-[30px]'>
                    <tr className='flex  justify-start text-start '>
                        <td className='w-[50%]'>brand:</td>
                        <td className='w-[50%]'>{test.brand}</td>
                    </tr>
                    <tr className='flex  justify-start text-start'>
                        <td className='w-[50%]'>category:</td>
                        <td className='w-[50%]'>{test.category}</td>
                    </tr>
                    <tr className='flex  justify-start text-start'>
                        <td className='w-[50%]'>description:</td>
                        <td className='w-[50%]'>{test.description}</td>
                    </tr>
                    <tr className='flex  justify-start text-start'>
                        <td className='w-[50%]'>price:</td>
                        <td className='w-[50%]'>Rs{test.price}</td>
                    </tr>
                </table>
            </div>
            
            <button  onClick={()=>idfuntion(test)} className='bg-[green] mobile:w-[30%] p-[10px] font-semibold'>ADD to CART</button>
        </div>

    )
    

}