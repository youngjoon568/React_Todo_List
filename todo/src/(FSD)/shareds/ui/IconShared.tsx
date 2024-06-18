import styled from "styled-components";
import { IconType } from "../types/Icon.tyoe";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const IconStyle = styled.span`
font-size: 32px;
display: flex;
justify-content: center;
align-items: center;
`;

const IconShared = ({ iconType, ...props }: IconType) => {
    let component = null;

    switch (iconType) {
        case "delete":
            component = <MdDelete />;
            break;
        case "check":
            component = <FaCheck />;
            break;
        case "plus":
            component = <FaPlus />;
            break;
        default:
            component = null;
            break;
    }

    return (
        <IconStyle className={`icon_${iconType}`} {...props}>{component}</IconStyle>
    )
};

export default IconShared;