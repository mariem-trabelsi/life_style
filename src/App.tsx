import { useState } from 'react';
import './App.css';
import InputFieled from './Components/InputFieled';
import { Todo } from './Components/todo.model';

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  console.log(todo)
 const handleAddNewItem = (e:React.FormEvent)=> {
  e.preventDefault()
  if(todo) {
    setTodos ([...todos, {id: Date.now(), todo:todo, isDone:false} ])
    setTodo("")
  }
}
console.log(todos)
  return (
    <div className="app">
      <span className="heading">taskify</span>
      <InputFieled todo={todo} setTodo={setTodo} handleAddNewItem={handleAddNewItem}/>
    </div>
  );
}

export default App;
