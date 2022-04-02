import styled, { createGlobalStyle } from 'styled-components';



export const  Overview = styled.div` 
 	background-color: #fff;
    padding: 2rem;
    position: absolute;
    max-height: 90%;
    overflow: auto;
    left: 0;
    bottom: 0;
    right: 0;
    transform: translateY(101%);
    transition: transform 0.3s ease-in;
`

export const  Img = styled.img` 
 max-width: 100%;
 max-height: 100%;
`

export const  Caja = styled.div` 
 	background-color:#373b69;
    border-radius: 10px;
    box-shadow: 5 4px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
    margin: 1rem;
    width: 90%;
    &:hover  {${Overview}{
        transform: translateY(0);}
        ${Img}{
            filter: blur(.5rem);
        }
    }
    
    
`


export const  MovieInfo = styled.div` 
	color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem;
    letter-spacing: 0.5px;
`
export const  Title = styled.h3` 
	margin: 0;
`

export const  Vote = styled.span` 
	color:${prop=> prop.color? prop.color : "blue"};
 	background-color: #22254b;
    border-radius: 3px;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
`

export const Button = styled.button`
  text-decoration: none;
  border: none;
  background-color: #373b69;
   color:white;
   font-size:0.9rem;
   border-radius:20px;
   width:auto;
   padding:10px;
   margin:10px;
  &:hover{
    transform: scale(1.1);
  }
 
`