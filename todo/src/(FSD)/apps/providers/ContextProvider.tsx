import React, { useState } from "react";
import type { TodoType } from "../../shareds/types/Todo.type";
import { TodoListStore } from "../../shareds/stores/TodoListStore";
import { TodoListData } from "../../entities/todo/consts/TodoListData";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [todoList, setTodoList] = useState<TodoType[]>(TodoListData);

    return (
        <TodoListStore.Provider value={{ todoList, setTodoList }}>
            { children }
        </TodoListStore.Provider>
    );
};

export default ContextProvider;