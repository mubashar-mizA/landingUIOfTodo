import { useState } from "react"

const AddTodo = ({ newTodo }) => {
    const [todoContent, setTodoContent] = useState('')
    const [todoTitle, setTodoTitle] = useState('')


    const handleTodoContent = (e) => {
        e.preventDefault()

        newTodo({
            todoTitle: todoTitle,
            todoContent: todoContent,
            isCompleted: false
        })

        setTodoTitle('')
        setTodoContent('')

    }
    return (
        <>
            <form onSubmit={handleTodoContent} className="flex flex-col w-4/5 mx-auto md:gap-4">

                <input
                    type="text"
                    value={todoTitle}
                    onChange={(e) => {
                        setTodoTitle(e.target.value)
                    }}
                    placeholder="Todo Title"
                    className="border p-2 placeholder:text-black"
                />

                <textarea
                    value={todoContent}
                    onChange={(e) => {
                        setTodoContent(e.target.value)
                    }}
                    placeholder="Todo Content"
                    className="border p-2 placeholder:text-black"
                    cols={34}
                    rows={10}

                ></textarea>
                
                <button
                    type="submit"
                    className="bg-green-600 p-1 text-white "
                >
                    Add To List
                </button>

            </form>
        </>
    )
}
export default AddTodo