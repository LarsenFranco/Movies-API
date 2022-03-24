import styled, { createGlobalStyle } from 'styled-components';

//! CardList
export const Caja = styled.ul`
	display: inline-flex;
	/* background-color:yellow; */
	
	height:35rem;
	width:24%;
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
	background-color:#150050;
	display: flex;
	flex-direction:column;
	border-radius:1rem;
	padding:1rem;
	margin: 1rem;
	font-size: 1rem;
	width: 18rem;
	height: auto;
	&:hover{
		-webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 2px 5px 27px 19px rgba(176,190,255,0); 
box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 2px 5px 27px 19px rgba(176,190,255,0);
		
	}
`
//! card-image
export const ALink = styled.a`
	/* background-color:blue; */
	display: block;
	text-decoration:none;
	
`

export const Img = styled.img`
	width: 98%;
	height: 24rem;
	border-radius:20px;
`
export const Title = styled.h1`
font-size:1.5rem;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color:white;
text-decoration:none;
`



export const Button = styled.button`
font-size:2rem;
background: none;
border: 0;
color: inherit;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
&:hover{
	transform: scale(1.5);
	transition: transform 0.3s ease-in-out;
}

`

//REFERENCIAS> https://codepen.io/derekmorash/pen/NjBvdX
export const Descr = styled.span`
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color:white;
`