import "./App.css";
import CharacterCounter from "./characterCounter";
import TodoList from "./todoList";

function App() {
  return (
    <div className="App">
      <h1>Character Counter</h1>
      <CharacterCounter />
      <br></br>
      <hr />

      <h1>To-Do list</h1>
      <TodoList />
      <br></br>
      <hr />
    </div>
  );
}

export default App;
