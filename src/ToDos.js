import { useState } from "react";

function ToDos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (!todo) return;
    setTodos((currentArr) => [...currentArr, todo]);
    setTodo("");
  };
  console.log(todos);
  console.log(todos.map((item, index) => (
    <li key={index}>{item}</li>
  )));
  return (
    <div className="App">
      <h1>My To-Do list</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your To-Do..."
        ></input>
        <button>Add To-Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDos;
