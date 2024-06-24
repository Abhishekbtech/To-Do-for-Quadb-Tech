import { Provider } from 'react-redux'
import './App.css'
import {store} from './Store/store'
import AddTodo from './Compenent/AddTodo'
import Todo from './Compenent/Todo'

function App() {

  return (
    <Provider store={store}>
      <h1 className='text-4xl'>To Do</h1>
      <AddTodo/>
      <Todo/>
    </Provider>
  )
}

export default App
