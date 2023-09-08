import { styled } from "styled-components"


export const Button = styled.button`
width: 220px;
padding: 10px 18px;
color: white;
min-width: 220px;
background: #000000;
border: none;
border-radius: 5px;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s background ease-in;
}
`
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

&:hover{
  background-color: black;
  border: 1px solid transparent;
  color: white;
}
`;