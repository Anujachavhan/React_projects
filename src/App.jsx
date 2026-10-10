import {useState} from 'react'
// import { X } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState('');
 const [details,setDetails]=useState(' ');
const [task,setTask]=useState([])

 const submitHandler=(e)=>{
  e.preventDefault();
  // console.log(title,details);

  const copyTask=[...task];
  copyTask.push({title,details})
  setTask(copyTask)
  // console.log(task);
  setTitle(' ')
  setDetails(' ');
 }
 
const deleteNote = (idx)=>{
// console.log("note deleted")
const copyTask =[...task];
// console.log(copyTask(idx));
copyTask.splice(idx,1)
setTask(copyTask)
}


  return (
    <div className='min-h-screen w-full flex flex-col lg:flex-row bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
        

      }}
      className='flex gap-4 w-full lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
           
            {/* pehls input for heading */}
            <input type="text"
            placeholder='enter notes heading ' 
            className='px-5 py-2 font-medium w-full outline-none border-2 rounded' 
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
            />
 
            {/* detailed  vala input */}
            <textarea 
             type="text" 
            placeholder='write details'
            className='px-5 py-2 h-32 font-medium flex items-start flex-row w-full outline-none border-2 rounded'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value);
            }}
        />
         <button 
         className='bg-white active:bg-gray-200  active:scale-95 font-medium text-black px-5 py-2 rounded'>Add Notes</button>
        
      
        
      </form>

      <div className='lg:w-1/2 lg:border-1-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-3 mt-2 overflow-auto'>
          { task.map(function(elem,idx){
          return  <div key={idx}
        className="relative flex justify-between flex-col h-52 item-start w-40 text-black pt-9 pb-4 px-4 py-2 rounded-2xl bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqLMmzgwJzxfdGbDq2qZIJiAdiO6eGUbUthQyYI3bDQ&s=10')]"
>
 
  <div>
      <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
      <p className="mt-3 text-sm leading-tight font-medium text-gray-700">
    {elem.details}</p>
  </div>
  <button onClick={()=>{
    deleteNote(idx)
  }}
  className='w-full bg-red-400 py-1 cursor-pointer active:scale-95  test-xs rounded font-bold  text-white'>Delete</button>
</div>
 })}
        </div>
        
      </div>
    </div>
  )
}

export default App
