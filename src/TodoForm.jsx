import { useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const todotitleInput = useRef('');

  function handleAddTodo(event) {
    event.preventDefault();

    const title = event.target.title.value;

    const newTodo = {
      id: Date.now(),
      title: title,
    };

    onAddTodo(newTodo);

    event.target.title.value = '';
    todotitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input type="text" id="todoTitle" name="title" ref={todotitleInput} />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
