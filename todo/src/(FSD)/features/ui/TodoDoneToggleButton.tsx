import React, { useContext } from "react";
import styled from "styled-components";
import { TodoListStore } from "../../shareds/stores/TodoListStore";
import { TodoContextType } from "../../shareds/types/TodoContext.type";
import IconShared from "../../shareds/ui/IconShared";

const TodoDoneToggleButtonStyle = styled.button`
padding: 5px;
background: none;
border: none;
cursor: pointer;
width: 34px;
height: 34px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 1px solid #ccc;
margin-right: 20px;

& > .icon_check {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

&.active {
    & > .icon_check {
        color: rgb(56, 217, 169);
    }

    border: 1px solid rgb(56, 217, 169);
}
`;

const TodoDoneToggleButton = ({ todoId, done }: { todoId: number; done: boolean; }) => {
    const { setTodoList } = useContext<TodoContextType>(TodoListStore);

    const todoDoneToggleHandler = () => {
        setTodoList((prev) => prev.map((todo) => {
            if (todo.todoId === todoId) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        }));
    }

    return (
        <TodoDoneToggleButtonStyle className={done ? "active" : ""} onClick={todoDoneToggleHandler}>
            {done && <IconShared iconType={"check"} />}
        </TodoDoneToggleButtonStyle>
    );
};

export default TodoDoneToggleButton;