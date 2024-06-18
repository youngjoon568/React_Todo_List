import React, { useEffect, useState } from "react";
import { TodoType } from "../types/Todo.type";
import styled from "styled-components";
import TodoDeleteButton from "../../features/ui/TodoDeleteButton";
import TodoDoneToggleButton from "../../features/ui/TodoDoneToggleButton";

const TodoItemStyle = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const LeftItemStyle = styled.div`
display: flex;
align-items: center;
`;

const TodoTextStyle = styled.p`
font-size: 20px;
`;

const RightItemStyle = styled.div`

`;

const TodoItemShared = ({ todo }: { todo: TodoType }) => {
    const [isTodoHover, setIsTodoHover] = useState<boolean>(false);


    return (
        <TodoItemStyle
            onMouseOver={_ => setIsTodoHover(true)}
            onMouseOut={_ => setIsTodoHover(false)}
        >
            <LeftItemStyle>
                <TodoDoneToggleButton todoId={todo.todoId} done={todo.done} />
                <TodoTextStyle>{todo.text}</TodoTextStyle>
            </LeftItemStyle>
            <RightItemStyle>
                {isTodoHover && <TodoDeleteButton todoId={todo.todoId} />}
            </RightItemStyle>
        </TodoItemStyle>
    );
};

export default TodoItemShared;