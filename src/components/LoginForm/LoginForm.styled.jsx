import styled from "styled-components";

export const Form = styled.form`
 width: 320px;
  margin: auto;
 `;
 
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  ;` 

  export const InputName = styled.input`
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    &:hover, &:focus {
        border: 5px solid #81b9e7;
    }`

  export const Link = styled.a`
    display: block;
    margin-top: 10px;
  `  

