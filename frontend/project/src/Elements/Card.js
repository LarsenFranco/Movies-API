import styled, { createGlobalStyle } from 'styled-components';

//! CardList
export const Caja = styled.ul`
	
	height:30rem;
	width:27%;
	margin: 1.6rem auto;
	padding: 0;
	font-size: 0;
	text-align: center;
	list-style: none;
	transition: transform 0.3s ease-in-out;
	&:hover{
		transform: translateY(-0.5rem) scale(1.01);
	}
`;
//! Card
export const CajaItem = styled.li`
	background-color:#1A515F;
	display: flex;
	flex-direction:column;
	border-radius:1rem;
	padding:1rem;
	margin: 1rem;
	font-size: 1rem;
	width: 27rem;
	height: 37rem;


`

//! card-image
export const ALink = styled.a`
	display: inline;
	min-height: 30rem; /* layout hack */
`

export const Img = styled.img`
	width: auto;
	height: 30rem;
	border-radius:20px;
`
export const Title = styled.h1`

font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color:white;
`

export const Descr = styled.span`
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color:white;
`

export const Button = styled.button`
font-size: 2rem;
background: none;
border: 0;
color: inherit;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin-left: 1rem;
&:hover{
	transform: scale(1.5);
	transition: transform 0.3s ease-in-out;
}

`

//REFERENCIAS> https://codepen.io/derekmorash/pen/NjBvdX
