import styled, { createGlobalStyle } from 'styled-components';



export const  Div = styled.div`
width:100%;
display:flex;
height: auto; //! CAMBIAR A AUTO
justify-content:center;
`;

export const  Text = styled.p`
display:flex;
color:white;
font-family:  sans-serif;
font-size: ${props => props.size};
`;





// export const Category = styled.p`
// font-family: monospace;
// color:white;
// font-size:1.5rem;
// margin:2rem;
// &.active {
//     font-weight: 600;
// 	font-size:1.39rem;
// }
// :hover{
//     transform: scale(1.3);
// 	transition: all 200ms ease-in;
// }
