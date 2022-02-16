import { useRecoilValue } from "recoil";
import { withFilteredTodoList } from "../../recoil/todoList";
import TodoItemCreator from "./TodoItemCreator";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(withFilteredTodoList);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
