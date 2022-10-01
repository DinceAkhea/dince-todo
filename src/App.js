import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
import Todos from './components/Todos';
//title, desc, date
function App() {
  const [showForm, setShowForm] = useState(false)
  const [todos, setTodos] = useState([])


  const addTodos = (title,description,date) => {

    const colors = ["card text-bg-primary", "card text-bg-secondary", "card text-bg-success", "card text-bg-danger", "card text-bg-warning", "card text-bg-info", "card text-bg-dark"]
    const color = colors[Math.floor(Math.random() * colors.length)]
    console.log(color)
    const id = todos.length + 1
    setTodos(prevTodos => [...prevTodos, {id:id,title:title,description: description, date:date, color:color}])
  }

  const deleteTodos = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="container">
      {/* <Header/>
      <AddTodo  onAdd={addTodos}/>
      <Todos todos={todos} onDelete={deleteTodos}/> */}

      <Header title="Todo App" addTodo = {() => setShowForm(!showForm)} showForm={showForm}/>
      {showForm ? <AddTodo onAdd={addTodos}/>:''}
     {todos.length > 0 ?  <Todos todos={todos} onDelete={deleteTodos} />:<p className='text-center fs-1'>Task is empty.</p>}
    </div>
  );
}

export default App;
