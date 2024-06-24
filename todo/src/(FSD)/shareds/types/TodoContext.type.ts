import type { TodoType } from "./Todo.type";

export interface TodoContextType {
    todoList: TodoType[];
    setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};