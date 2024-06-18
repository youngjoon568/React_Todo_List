import React, { useContext } from "react";
import styled from "styled-components";
import IconShared from "../../shareds/ui/IconShared";
import { TodoType } from "../../shareds/types/Todo.type";
import { TodoListStore } from "../../shareds/stores/TodoListStore";
import { TodoContextType } from "../../shareds/types/TodoContext.type";

const TodoDeleteButtonStyle = styled.button`
cursor: pointer;
background: none;
padding: 5px;
border: none;

& > span > svg {
    color: #ccc;
}

& > span > svg:hover {
    color: red;
}

`;

const TodoDeleteButton = ({ todoId }: { todoId: number; }) => {
    const { setTodoList } = useContext<TodoContextType>(TodoListStore);

    const todoDeleteHendler = () => setTodoList((prev: TodoType[]) => prev.filter((todo) => todo.todoId !== todoId));

    return (
        <TodoDeleteButtonStyle type={"button"} onClick={todoDeleteHendler}>
            <IconShared iconType={"delete"} />
        </TodoDeleteButtonStyle>
    );
};

export default React.memo(TodoDeleteButton);