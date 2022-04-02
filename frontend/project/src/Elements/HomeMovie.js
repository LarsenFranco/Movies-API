import styled, { createGlobalStyle } from 'styled-components';



export const Div = styled.div`
display:flex;
align-items:center;
flex-direction:${(props)=>props.dir?props.dir:"column"};
  padding:1rem;
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


export const NumsPagesContainer = styled.div`
    display:flex;
    flex-direction:row;
`;

export const NumPage = styled.button`
    display:${(props)=>props.disp?props.disp:""};
    margin:0.5rem;
    font-size:1.2rem;
    color:${(props)=>props.col?props.col:"white"};;
    font-family: monospace;
    background: transparent;
    border:none;
  &:hover{
    transform: scale(1.6);
	transition: all 200ms ease-in;
  cursor:pointer;
  }
`;




