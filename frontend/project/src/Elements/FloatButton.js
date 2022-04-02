import styled, { createGlobalStyle } from 'styled-components';

export const FloatButtonBtn = styled.button` 
    background-color: transparent;
    border: none;
    display:${(props)=> props? props.disp : "none"};
    position: fixed;
    bottom: 10%;
    right: 4%;
   &:hover{
    cursor: pointer
   }
`

export const FloatButtonImg = styled.img`     
height: 70px;
width: 70px;

`
