import React from "react";
import styled from "styled-components";

const TodoLayoutStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`;

const TodoLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <TodoLayoutStyle>
            {children}
        </TodoLayoutStyle>
    );
};

export default TodoLayout;