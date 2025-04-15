import { useState } from 'react';
import { useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const [workingTodo, setWorkingTodo] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: workingTodo,
      isCompleted: false,
    };

    onAddTodo(newTodo);
    setWorkingTodo('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={workingTodo}
        onChange={(event) => setWorkingTodo(event.target.value)}
      />
      <button disabled={workingTodo.trim() === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
