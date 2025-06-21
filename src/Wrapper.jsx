import { createContext, useState } from "react"


export const Todocontext = createContext(null)

const Wrapper = (props) => {

    const [todos, setTodos] = useState([
      {id: 1, title:"Get Started", isCompleted:false},
    ]) 
  return (
    
        <Todocontext.Provider value={[todos, setTodos]}>
            {props.children}
        </Todocontext.Provider>
    
  )
}

export default Wrapper