import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const Div = styled.div`
display:flex;
justify-self:center;
margin-left:${props => props.margL? props.margL: 0}
`
export const Nav = styled.div`
display: flex;
background: rgb(21,0,80);
background: linear-gradient(0deg, rgba(21,0,80,1) 38%, rgba(11,30,96,1) 100%);
height: 3.5rem;
align-items:center;
border-radius:20px;
font-size:1.2rem;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const NavLink = styled(Link)`
color: white;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
margin: 0 0 0 3rem;
&.active {
    font-weight: 600;
	font-size:1.39rem;
}
&:hover{
	transform: scale(1.3);
	transition: all 200ms ease-in;
}
`;


export const NavBtnLINK = styled(Link)`
 padding: 10px 22px; 
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: -10px;
border-radius:400px;
&:hover {
	transition: all 0.2s ease-in-out;
	background:#7D18D3;
}
`;

export const NavInput = styled.input`
color:white;
font-size: 1.2rem;
margin: 1rem;
height:2rem;
background: transparent;
border: 1px solid white;
border-radius:10px;
::placeholder {
  color: palevioletred;
}
`;


export const NavButton = styled.button`
font-size: 1.4rem;
background-color:transparent;
padding:20px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
margin-left: -10px;
`;


export const NavImg = styled.img`
width: 3rem;
height:3rem;
margin:1rem;
`