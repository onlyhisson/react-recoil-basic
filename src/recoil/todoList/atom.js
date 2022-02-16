import { atom } from "recoil";
import { TODO_LIST, TODO_LIST_FILTER } from "../types";
import { SHOW_ALL } from "./types-filter";

const todoListState = atom({
  key: TODO_LIST,
  default: [],
});

const todoListFilterState = atom({
  key: TODO_LIST_FILTER,
  default: SHOW_ALL,
});

export { todoListState, todoListFilterState };
