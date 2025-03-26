function TodoList(){
    const todos = [
        {id: 1, title: "review resources"},
        {id: 2, title: "review notes"},
        {id: 3, title: "code out app"},
      ];
    
    return (
        <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    )
}


export default TodoList           