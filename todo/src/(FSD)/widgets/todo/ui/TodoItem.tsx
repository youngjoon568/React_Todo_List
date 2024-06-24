import React, { useEffect, useState } from "react";
import { TodoType } from "../../../shareds/types/Todo.type";
import styled from "styled-components";
import TodoDoneToggleButton from "../../../features/todo/ui/TodoDoneToggleButton";
import TodoDeleteButton from "../../../features/todo/ui/TodoDeleteButton";

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