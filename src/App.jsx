import { useState } from 'react'
import AddTodo from './components/AddTodo.jsx'
import Navigation from './components/Navigation.jsx'
import Panel from './components/Panel.jsx'

const App = () => {

  const [todos, setTodos] = useState([])

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo])
    console.log(todos)
  }


  return (
    <>

      <Navigation />
      <div className='flex'>
        <Panel />
        <AddTodo newTodo={handleNewTodo} />
      </div>

      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              todos.map( ()=>{} )
            }
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
