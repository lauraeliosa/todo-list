import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const completeTodo = (id) => {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setTodoList(updatedTodos);
  };
  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={handleAddTodo} />

      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;
