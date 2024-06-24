import { createSlice, nanoid } from "@reduxjs/toolkit"

// Define the initial state of the todos feature, which is an empty array of todos.
const initialState = {
    todos: []
}

// Create a slice of the Redux state called 'todo', with the specified initial state and reducers.
export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    // Define the reducers for the slice, which handle state transitions.
    reducers: {
        // Create a new todo object with a unique ID, the text from the action payload, and completed set to true.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: true
            }
            state.todos.push(todo)
            let data = JSON.parse(localStorage.getItem('todos')) || []
            data.push(todo)
            localStorage.setItem('todos', JSON.stringify(data))
        },
        // The removeTodo reducer removes a todo from the state.
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            let data = JSON.parse(localStorage.getItem('todos')) || [];
            data = data.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(data));
        },
        // The editTodo reducer updates a todo in the state.
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, text };
                }
                return todo;
            });
            let data = JSON.parse(localStorage.getItem('todos')) || [];
            data = data.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, text };
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(data));
        },
    }
})

export const { addTodo, removeTodo, editTodo} = TodoSlice.actions

export default TodoSlice.reducer