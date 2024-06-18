import React, { useReducer } from "react";
import TodoCreateForm from "../../../features/ui/TodoCreateForm";
import TodoCreateOpenButton from "../../../features/ui/TodoCreateOpenButton";
import styled from "styled-components";

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