import styled from "styled-components";


    export const Button = styled.button`
    background-color: rgb(147, 243, 229);
    border: none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    width: auto;
    padding: 7px;
    /* margin-left: 50px; */
    &:hover, &:focus {
        background-color:  pink;
    }
`;