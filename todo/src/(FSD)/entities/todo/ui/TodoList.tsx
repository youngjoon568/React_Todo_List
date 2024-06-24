import styled from "styled-components";
import { TodoListStore } from "../../../shareds/stores/TodoListStore";
import React, { useContext } from "react";
import { TodoContextType } from "../../../shareds/types/TodoContext.type";
import TodoItemShared from "../../../widgets/todo/ui/TodoItem";

const TodoListStyle = styled.div`
flex-grow: 2;
width: 100%;
display: flex;
flex-direction: column;
`;

const ListInnerStyle = styled.div`
padding: 20px;
padding-bottom: 30px;
`;

const TodoList = () => {
    const { todoList } = useContext<TodoContextType>(TodoListStore);

    return (
        <TodoListStyle>
            <ListInnerStyle>
                {
                    todoList.map((todo, index) => (
                        <React.Fragment key={index}>
                            <TodoItemShared todo={todo} />
                        </React.Fragment>
                    ))
                }
            </ListInnerStyle>
        </TodoListStyle>
    );
};

export default TodoList;