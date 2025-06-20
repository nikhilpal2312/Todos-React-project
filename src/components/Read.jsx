import React from 'react'

const Read = (props) => {

const todos = props.todos;
const setTodos = props.setTodos;

    const RenderResult = todos.map((todo)=><div className='mb-2 flex justify-between items-center p-4 bg-gray-900 rounded'
     key={todo.id}> <span className='text-xl font-thin '>{todo.title} {todo.describe}</span> 
    <button  className="text-red-500 hover:text-red-700 transition text-lg" onClick = {() => deleteHandler(todo.id)}
   >🗑️ </button>
    </div>)

        const deleteHandler =(id) =>{
            const filtertodo = todos.filter((todo) => todo.id != id)
            setTodos(filtertodo)
        }





  return (
    <div className='w-[50%]'>
    <h1 className='text-xl  font-thin text-pink-300 mt-2 mb-4'>Pending Status</h1>
    <h2>{RenderResult}</h2>
    </div>
  )
}

export default Read