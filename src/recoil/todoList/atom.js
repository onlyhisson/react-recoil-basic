import { atom } from "recoil";
import { TODO_LIST } from "../types";

const todoListState = atom({
  key: TODO_LIST,
  default: [],
});

export default todoListState;
