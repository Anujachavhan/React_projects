import React ,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Card from './components/Card.jsx';
const App = () => {

const [userData,setUserData]=useState([]);
const [index,setIndex]=useState(1)
//   const arr =[
//     {
//       user:'Sarthak',
//       age:23
//     }
//   ]

  const getData=async ()=>{
  const response=await axios.get(
    `https://picsum.photos/v2/list?page=${index}&limit=15`
     );

  setUserData(response.data);

}
useEffect(function(){
 getData();
},[index]);

let printUserData=<h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 font-semiBOld -translate-y-1/2' >Loading............</h3>

 if(userData.length>0){
  printUserData=userData.map(function(elem){

    return <div key={elem.id}>
      <Card elem={elem} />
       
      
    </div>
      
    
  })
 }
  return (
    <div className='bg-black overflow-auto min-h-screen p-5 text-white'>
      {/* <button 
      onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white '>
        Get data</button> */}
        <h1 className='fixed bg-red-500 text-6xl'>{index}</h1>
    <div className='flex h-[82%] flex-wrap gap-4 p-2'>
      
         {printUserData}
      
    </div>
    <div className='flex justify-center items-center gap-6 p-4'>
     
       <button
          style={{opacity:index==1?0.5:1}}
       className='bg-amber-400 text-black cursor-pointer active-scale-95 text-sm rounded px-4 py-2 font-semibold
        '
        onClick={() =>{
          if(index>1){
           setUserData([])
             setIndex(index-1)
      }
              
        }}
        >
        Prev 
        </button>
        <h3>Page {index}</h3>
        <button className='bg-amber-400 text-black cursor-pointer active-scale-95  text-sm rounded px-4 py-2 font-semibold '
        onClick={()=>{
          setUserData([])
           setIndex(index+1);

        }}>
          Next
           </button>

    </div>
      
    </div>
  )
}

export default App
