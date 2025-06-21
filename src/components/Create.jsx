import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Todocontext } from '../Wrapper';

const Create = () => {
   
const [todos, setTodos] = useContext(Todocontext)
 const {register,handleSubmit,reset,formState: { errors },} = useForm()

 const SubmitHandle = (data) =>{   
  data.isCompleted = false;
  data.id = nanoid();

  
   
   let copytodos = [...todos];
   copytodos.push(data)
   setTodos(copytodos)

   toast.success("Title Create Successfully!")
   
   console.log(todos)
   reset('')
}


  return (
    <>
       
    <header className="text-center">
            <h1 className="text-3xl font-bold text-white">📝 To-Do List</h1>
            <p className="text-sm text-gray-500 mt-2 mb-4">Organize your tasks with ease</p>
    </header>
    
       <div> 
       <form onSubmit={handleSubmit(SubmitHandle)} className='w-[70%]'>
      <input {...register("title",{required:"Title can not be Empty"} )}
        type="text" 
        placeholder="What needs to be done?" 
        className="w-full px-4 py-3 font-thin outline-0 text-xl border border-gray-300 rounded-lg text-white focus:ring-2 
        focus:ring-blue-600 focus:outline-none shadow-sm transition-all" />
         
        <div>
          <p className='text-red-400'>{errors?.title?.message}</p>
        </div>

        <br></br>
        


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