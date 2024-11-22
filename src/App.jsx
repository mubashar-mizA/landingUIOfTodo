import { useState } from 'react';
import AddTodo from './components/AddTodo.jsx';
import Navigation from './components/Navigation.jsx';
import Panel from './components/Panel.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Edit function
  const handleEdit = (index) => {
    const updatedTitle = prompt('Enter new title:', todos[index].todoTitle);
    const updatedContent = prompt('Enter new content:', todos[index].todoContent);
    if (updatedTitle && updatedContent) {
      const updatedTodos = [...todos];
      updatedTodos[index] = {
        ...updatedTodos[index],
        todoTitle: updatedTitle,
        todoContent: updatedContent,
      };
      setTodos(updatedTodos);
    }
  };

  // Trash function
  const handleTrash = (index) => {
    alert(`Todo ${index + 1} moved to trash!`);
    // Logic for trash can be implemented based on your application flow
  };

  // Delete function
  const handleDelete = (indexOfTodo) => {
    const updatedTodos = [...todos]
    updatedTodos.splice(indexOfTodo, 1)
    setTodos(updatedTodos)
  };

  // Complete function
  const handleComplete = (index) => {
    
    const updatedTodos = [...todos]
    updatedTodos[index] = {
      ...updatedTodos[index],
      isCompleted: !updatedTodos[index].isCompleted
    }
    setTodos(updatedTodos)
  };

  return (
    <>
      <Navigation />
      <div className="flex max-h-screen">
        <Panel />
        <AddTodo newTodo={handleNewTodo} />
      </div>
      <div className="md:w-[98%] w-full mx-auto border text-left p-2 mt-10 bg-blue-200">
        List Of All Todos
      </div>

      <table className="md:w-[98%] w-full mx-auto border text-center mb-10">
        <thead className="border">
          <tr>
            <th className="border">Sr No.</th>
            <th className="border">Title</th>
            <th className="border">Content</th>
            <th className="border" colSpan={4}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {todos.map((todo, indexOfTodo) => (
            <tr key={indexOfTodo} >
              <td className='border' >{indexOfTodo + 1}</td>
              <td className='border' >{todo.todoTitle}</td>
              <td className={todo.isCompleted ? "bg-green-500 line-through text-white":" bg-transparent"} >{todo.todoContent}</td>
              <tr className='flex flex-col '>
                <td className='border w-full '
                  onClick={() => {
                    handleEdit(indexOfTodo)
                  }}>Edite</td>

                <td className='border w-full ' >Trash</td>
                <td className='border w-full ' onClick={() => {
                  handleDelete(indexOfTodo)
                }}>Delete</td>
                <td className='border w-full hover:cursor-pointer' 
                onClick={()=>{
                  handleComplete(indexOfTodo)
                }}
                >Complete</td>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
