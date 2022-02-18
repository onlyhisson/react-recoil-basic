import "./App.css";
import CharacterCounter from "./characterCounter";
import TodoList from "./todoList";
import MyApp from "./myAppSync";
import MyAppAsync from "./myAppAsync";

const App = () => {
  return (
    <div className="App">
      <h1>Character Counter</h1>
      <div className="App-item">
        <CharacterCounter />
      </div>

      <h1>To-Do list</h1>
      <div className="App-item">
        <TodoList />
      </div>

      <hr />

      <h1>My App - Synchronous Example</h1>
      <div className="App-item">
        <MyApp />
      </div>

      <hr />

      <h1>My App - Asynchronous Example</h1>
      <div className="App-item">
        <MyAppAsync />
      </div>
    </div>
  );
};

export default App;
