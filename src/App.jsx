import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {

  return (
    <div className="w-screen h-screen p-10 text-white bg-gray-800">
      <Create  />
      <Read />
    
    </div>
  )
}

export default App