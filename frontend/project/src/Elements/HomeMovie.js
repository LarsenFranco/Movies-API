import styled, { createGlobalStyle } from 'styled-components';



export const Div = styled.div`
    display:flex;
    justify-content:center;
    font-family: "Poppins", sans-serif;
    margin: 0;
`;

export const Grid = styled.main`
display: grid ;
font-family: "Poppins", sans-serif;
grid-gap:1rem;
grid-template-columns: repeat(4,4fr);
grid-template-rows:repeat(1,4fr);


`;


export const Text = styled.p`
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
