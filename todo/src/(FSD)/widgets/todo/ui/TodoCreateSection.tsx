import React, { useReducer } from "react";
import styled from "styled-components";
import TodoCreateForm from "../../../features/todo/ui/TodoCreateForm";
import TodoCreateOpenButton from "../../../features/todo/ui/TodoCreateOpenButton";

const TodoCreateSectionStyle = styled.section`
width: 100%;
`;

const TodoCreateSection = () => {
    const [isOpen, toggleOpenHandler] = useReducer((state) => !state, false);


    return (
        <TodoCreateSectionStyle>
            <TodoCreateForm isOpen={isOpen} />
            <TodoCreateOpenButton toggleOpenHandler={toggleOpenHandler} />
        </TodoCreateSectionStyle>
    );
};

export default TodoCreateSection;