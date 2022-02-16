import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../recoil/todoList";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_UNCOMPLETED,
} from "../../recoil/todoList/types-filter";

const TodoListFilters = () => {
  const [filter, setFitler] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFitler(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={SHOW_ALL}>All</option>
        <option value={SHOW_COMPLETED}>Completed</option>
        <option value={SHOW_UNCOMPLETED}>Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
