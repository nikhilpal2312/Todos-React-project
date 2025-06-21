import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {

  
const [todos, setTodos] = useState([
  {id: 1, title:"Get Started", isCompleted:false},
])

  return (
    <div className="w-screen h-screen p-10 text-white bg-gray-800">
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos}/>
    
    </div>
  )
}

export default App