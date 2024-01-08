import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './index/navbar';
import Home from './addsub/home';
import Likes from './addsub/likes';
import Cart from './addsub/cart';
import { useState } from 'react';
import Iphone9 from './addsub/enters/iphone9';

function App() {
  const [cartid,setcartid] = useState([])
  const idfuntion =(event)=>{
    
    setcartid([...cartid, event])
    
  }
  const likefun =(event)=>{
    setlike([...like, event])
  }
  const [like,setlike] = useState([])

  const del=(event)=>{
    setcartid(
      cartid.filter((val,index)=>{
        if(event === index){

        }
        else{
          return val
        }
      })
    )

 
  }
  const remove=(event)=>{
    setlike(
      like.filter((val,index)=>{
        console.log(val)
        
          if(event === index){
            
          }
          else{
            return val
          }
        })
        )
  }
  return (
    <div className="App">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/likes' element={<Likes like={like} remove={remove}/>}/>
            <Route path='/cart' element={<Cart cartid={cartid}  remove={del}/>}/>
            <Route path='/item/:id'  element={<Iphone9 likefun={likefun}/>} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
