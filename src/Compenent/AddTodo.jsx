import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Reducer/TodoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    /**
   * Handle the add todo button click event.
   * Prevent the default form submission behavior.
   * Dispatch the addTodo action with the current input value.
   * Reset the input state to an empty string.
   */
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} 
        className="space-x-3 mt-12">
            {/* Input field to enter new todo text */}
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {/* Add todo button */}
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-1"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo