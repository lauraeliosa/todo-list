import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
  return (
    // <ul>
    //   {todoList.map((todo) => (
    //     <TodoListItem key={todo.id} todo={todo} />
    //   ))}
    // </ul>

    <ul>
      {todoList.map((todo) => {
        console.log(todo);
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
