import { nanoid } from 'nanoid'
import React,{useState} from 'react'

const Create = (props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;

    const [title, setTitle] = useState("")
    const [describe, setDescribe] = useState('')


 const SubmitHandle = (e) =>{   
//   console.log(title)
   e.preventDefault();

   const newTodos = {
    id: nanoid(),
    title,
    isCompleted:false,
   }
   const newDescribe = {
    id: nanoid(),
    title,
    isCompleted:false,
   }
  //  console.log(newTodos)
   setTitle('')
   setDescribe('')
   
  //  let copytodos = [...todos];
  //  copytodos.push(newTodos)
  //  setTodos(copytodos)

   setTodos([...todos, newTodos])
//    console.log(todos)
}


  return (
    <>
    <div className='w-[50%]'>
        
    <header className="text-center">
            <h1 className="text-3xl font-bold text-white">📝 To-Do List</h1>
            <p className="text-sm text-gray-500 mt-2 mb-4">Organize your tasks with ease</p>
    </header>
    
       
       <form onSubmit={SubmitHandle} className="flex items-center gap-3">
      <input onChange={(e) => setTitle(e.target.value)} value={title}
        type="text" 
        placeholder="What needs to be done?" 
        className="flex-1 px-4 py-3 font-thin outline-0 text-xl border border-gray-300 rounded-lg text-white focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition-all" />


      <button 
        type="submit" 
        className="px-5 py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all shadow-md">
        Add Task
      </button>
    </form>
    </div>
    </>
  )
}

export default Create;