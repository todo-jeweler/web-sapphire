import { atom } from "recoil";

export const todoState = atom({
  key: "todo/todoState",
  default: "",
});
