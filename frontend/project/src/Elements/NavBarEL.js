import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #150050;
height: 3.5rem;
display: flex;
justify-content: space-between;
padding-left:0.3rem;
z-index: 1;
border-radius:20px;
font-size:1.2rem;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    font-weight: 600;
	font-size:1.39rem;
}
&:hover{
	transform: scale(1.3);
	transition: all 200ms ease-in;
}
`;


export const NavMenu = styled.div`

display: flex;
align-items: center;
margin-right: -24px;

@media (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin: 1rem;
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
justify-self:flex-end;
font-size: 1.2rem;
padding: 10px;
margin: 10px;
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