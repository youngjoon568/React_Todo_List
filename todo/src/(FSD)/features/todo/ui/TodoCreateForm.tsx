import React, { useContext, useEffect, useReducer } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoContextType } from "../../../shareds/types/TodoContext.type";
import { TodoListStore } from "../../../shareds/stores/TodoListStore";
import FormInputShared from "../../../shareds/ui/FormInputShared";

const TodoCreateFormStyle = styled.form`
width: 100%;
height: 200px;
display: flex;
align-items: center;
justify-content: center;

&.active {
    background: #f8f8f8;
}
`;

const TodoCreateForm = ({ isOpen } : { isOpen: boolean }) => {
    const { setTodoList } = useContext<TodoContextType>(TodoListStore);

    const schema = z.object({
        text: z.string()
            .max(50, {
                message: "50자 이하로 작성해주세요"
            })
            .min(5, {
                message: "5자 이상 입력해주세요"
            })
    });

    const { control, handleSubmit, formState: { errors, isValid, submitCount } } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (data: any) => {
        setTodoList((prev: any) => {
            return [...prev, {
                todoId: prev.length + 1,
                text: data.text,
                done: false
            }];
        });
    };


    useEffect(() => {

    }, [isOpen]);

    return (
        <TodoCreateFormStyle
            className={isOpen ? "active" : ""}
            onSubmit={handleSubmit(onSubmit)}>
            {isOpen && <FormInputShared placeholder={"할 일을 입력해주세요"} control={control} name={"text"} />}
        </TodoCreateFormStyle>
    );
};

export default TodoCreateForm;