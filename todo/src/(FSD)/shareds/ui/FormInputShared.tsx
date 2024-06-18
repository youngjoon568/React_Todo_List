import styled from "styled-components";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";

const FormInputStyle = styled.input`
width: 80%;
height: 38px;
padding: 5px 20px;
font-size: 16px;
border: 1px solid #ddd;

&::placeholder {
    font-size: 18px;
}
`;

const FormInputShared = ({ name, control, placeholder }: { name: string; placeholder: string; control: Control;  }) => {
    return (
        <Controller 
        name={name}
        control={control}
        render={({ field }) => (
            <FormInputStyle {...field} placeholder={placeholder} autoFocus type={"text"} />
        )}
        />
    );
};

export default FormInputShared;