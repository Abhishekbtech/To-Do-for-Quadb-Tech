import { configureStore } from "@reduxjs/toolkit"
import TodoSlice from '../Reducer/TodoSlice'

// Create the Redux store by calling the configureStore function.
// The store is configured with the TodoSlice reducer and an initial state that is loaded from local storage.
export const store = configureStore({
    reducer: TodoSlice,
    // Initialize the state with data loaded from local storage, or an empty array if no data is found.
    preloadedState: {
        todos: JSON.parse(localStorage.getItem('todos')) || []
    }
})

// The preloadedState is loaded from local storage using the getItem method, and parsed as JSON. If the item is not found, an empty array is used as the default value.