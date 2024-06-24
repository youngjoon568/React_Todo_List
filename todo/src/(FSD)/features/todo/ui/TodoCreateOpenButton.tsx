import React from "react";
import styled from "styled-components";
import IconShared from "../../../shareds/ui/IconShared";

const TodoCreateOpenButtonStyle = styled.button`
display: flex;
justify-content: center;
align-items: center;
background: none;
border: none;
position: absolute;
left: 50%;
bottom: -30px;
transform: translate(-50%, -50%);
`;

const TodoCreateOpenButton = ({ toggleOpenHandler } : { toggleOpenHandler: React.DispatchWithoutAction; }) => {
    return (
        <TodoCreateOpenButtonStyle onClick={toggleOpenHandler}>
            <IconShared iconType={"plus"} />
        </TodoCreateOpenButtonStyle>
    );
};

export default TodoCreateOpenButton;