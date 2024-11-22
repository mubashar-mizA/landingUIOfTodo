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
      <div className='flex max-h-screen'>
        <Panel />
        <AddTodo newTodo={handleNewTodo} />
      </div>
      <div className='md:w-[95%] mx-auto border text-left p-2 mt-10 bg-blue-200'>List Of All Todos</div>

      <table className='md:w-[95%] mx-auto border text-center mb-10'>
        <thead className='border'>
          <tr>
            
            <th className='border' >Sr No.</th>
            <th className='border' >Title</th>
            <th className='border' >Content</th>
            <th className='border'colSpan={3} >Actions</th>
          </tr>
        </thead>
        <tbody>
          {

            todos.map((todo, indexOfTodo) => <tr key={indexOfTodo} className=''>
              
              <td className='border' >{indexOfTodo + 1}</td>
              <td className='border' >{todo.todoTitle}</td>
              <td className='border' >{todo.todoContent}</td>
              <td className='border inline-block w-full text-left ' >Edit</td>
              <td className='border inline-block w-full text-left ' >Trash</td>
              <td className='border inline-block w-full text-left ' >Delete</td>
              <td className='border inline-block w-full text-left ' >Complete</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
