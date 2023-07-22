import styled from "styled-components"

const colors = {
  primary: '#1d7ced',
  secondary: '#fca311',
  button: '#00b894',
  hover: '#00b850',
}
export const StyledButton = styled.div `
background: ${colors.button};
border-radius: 10px;
color: ${colors.white};
padding: 20px;
width:10rem;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;

&:hover {
  background-color: ${colors.hover};
  cursor: pointer;
}
`