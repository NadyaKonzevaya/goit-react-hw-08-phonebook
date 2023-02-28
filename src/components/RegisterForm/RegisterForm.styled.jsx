import styled from "styled-components";

export const Form = styled.form`
  width: 320px;
  margin: auto;
  `



export const Label = styled.label`
 display: flex;
  flex-direction: column;
  margin-bottom: 16px;`
 
export const InputName = styled.input`
   box-sizing: border-box;
   height: 30px;
   margin-top: 5px;
   
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    &:hover, &:focus {
        border: 5px solid rgb(147, 243, 229);
    }`



